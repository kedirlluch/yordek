"""Recorta y optimiza las fotos de la web.

Lee los originales de fotos-originales/ (no se sube a git) y escribe en public/img/
un WebP por cada ancho de WIDTHS: <nombre>-480.webp, <nombre>-800.webp, <nombre>-1200.webp.
Los anchos tienen que coincidir con lib/image-loader.ts y con images.deviceSizes de next.config.ts.

Uso: python3 scripts/fotos.py    (necesita Pillow: pip install pillow)

Para cambiar una foto de prueba por una real: copia el original a fotos-originales/, cambia su
línea en SLOTS (origen y carpeta "fotos" en vez de "prueba") y actualiza la ruta en la página.
Las fotos de public/img/prueba/ salen en la web con la etiqueta "Foto de prueba".
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "fotos-originales"
OUT = ROOT / "public" / "img"
WIDTHS = (480, 800, 1200)
QUALITY = 78

# nombre: (carpeta de salida, original, proporción ancho/alto, punto de interés x, y de 0 a 1)
SLOTS = {
    # Huecos 4:3 (heros de Home, servicios y landings)
    "home-hero": ("prueba", "home-hero-usuario.png", 4 / 3, 0.5, 0.5),
    "quitar-gotele-hero": ("prueba", "COMPOSICION_GOTELE", 4 / 3, 0.5, 0.5),
    "alisado-hero": ("prueba", "prueba/pared-alisada-llana.jpg", 4 / 3, 0.5, 0.5),
    "pintura-pisos-hero": ("prueba", "prueba/dormitorio-b.jpg", 4 / 3, 0.5, 0.5),
    "pintura-locales-hero": ("prueba", "prueba/sala-reuniones.jpg", 4 / 3, 0.5, 0.5),
    "reparacion-hero": ("prueba", "prueba/habitacion-parcheada.jpg", 4 / 3, 0.5, 0.5),
    "landing-pintura": ("prueba", "prueba/dormitorio-a.jpg", 4 / 3, 0.5, 0.5),
    # Trabajando (Home "Quiénes somos" y /nosotros/)
    "trabajando-cuadrada": ("prueba", "prueba/pintor-espaldas-b.jpg", 1, 0.55, 0.4),
    "trabajando-vertical": ("prueba", "prueba/pintor-espaldas-a.jpg", 4 / 5, 0.5, 0.4),
    # Antes y después (4:3)
    "antes-grieta": ("prueba", "prueba/pared-agrietada.jpg", 4 / 3, 0.5, 0.5),
    "despues-grieta": ("prueba", "prueba/pared-blanca-hornacina.jpg", 4 / 3, 0.5, 0.5),
    "antes-gotele": ("prueba", "prueba/pared-gotele.jpg", 4 / 3, 0.5, 0.5),
    "despues-gotele": ("prueba", "prueba/pared-lisa.jpg", 4 / 3, 0.5, 0.5),
    # Ambiente (picsum/Unsplash, elegidas por la skill de diseño): interiores, nunca fachadas ni exteriores
    "pared-lisa-hueco": ("prueba", "prueba/picsum-954.jpg", 4 / 3, 0.38, 0.5),
    "local-cuadros": ("prueba", "prueba/picsum-834.jpg", 4 / 3, 0.5, 0.3),
    "comedor-luz": ("prueba", "prueba/picsum-625.jpg", 4 / 3, 0.55, 0.5),
    "pared-azul": ("prueba", "prueba/picsum-1068.jpg", 4 / 3, 0.5, 0.5),
    "dormitorio-taza": ("prueba", "prueba/picsum-691.jpg", 4 / 3, 0.6, 0.5),
}


def crop(im: Image.Image, ratio: float, fx: float, fy: float) -> Image.Image:
    """Recorta a la proporción pedida centrando en el punto de interés."""
    w, h = im.size
    if w / h > ratio:
        nw, nh = round(h * ratio), h
    else:
        nw, nh = w, round(w / ratio)
    left = min(max(round(fx * w - nw / 2), 0), w - nw)
    top = min(max(round(fy * h - nh / 2), 0), h - nh)
    return im.crop((left, top, left + nw, top + nh))


def gotele_composition() -> Image.Image:
    """Montaje de prueba: gotelé abajo a la izquierda y pared lisa arriba a la derecha, como el logo."""
    size = (1200, 900)
    rough = crop(Image.open(SRC / "prueba/pared-gotele.jpg").convert("RGB"), 4 / 3, 0.5, 0.5).resize(size)
    smooth = crop(Image.open(SRC / "prueba/pared-lisa.jpg").convert("RGB"), 4 / 3, 0.5, 0.5).resize(size)
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).polygon([(0, 0), (size[0], 0), (size[0], size[1] * 0.85), (0, size[1] * 0.15)], fill=255)
    out = Image.composite(smooth, rough, mask.filter(ImageFilter.GaussianBlur(3)))
    return out


def main() -> None:
    for name, (folder, source, ratio, fx, fy) in SLOTS.items():
        if source == "COMPOSICION_GOTELE":
            im = gotele_composition()
        else:
            im = crop(Image.open(SRC / source).convert("RGB"), ratio, fx, fy)
        dest = OUT / folder
        dest.mkdir(parents=True, exist_ok=True)
        for w in WIDTHS:
            h = round(w / ratio)
            path = dest / f"{name}-{w}.webp"
            im.resize((w, h), Image.LANCZOS).save(path, "WEBP", quality=QUALITY, method=6)
        sizes = ", ".join(f"{(dest / f'{name}-{w}.webp').stat().st_size // 1024} KB" for w in WIDTHS)
        print(f"{folder}/{name}: {sizes}")


if __name__ == "__main__":
    main()
