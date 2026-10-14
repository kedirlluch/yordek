import {
  Badge,
  Button,
  Card,
  Container,
  Eyebrow,
  Heading,
  Section,
  Text,
} from '../components/design-system';

export const metadata = {
  title: 'Design System | LLUCH & YUCH',
  robots: {
    index: false,
    follow: false,
  },
};

const tokens = [
  { name: 'color-bg', value: '#F6F2EC' },
  { name: 'color-surface', value: '#FFFFFF' },
  { name: 'color-stone', value: '#E8E1D6' },
  { name: 'color-border', value: '#D9D0C2' },
  { name: 'color-text', value: '#1E1B18' },
  { name: 'color-text-muted', value: '#6B6359' },
  { name: 'color-accent', value: '#B5573A' },
  { name: 'color-accent-hover', value: '#9C472D' },
  { name: 'color-dark', value: '#1E1B18' },
];

export default function DesignSystemPage() {
  return (
    <Container>
      <Section variant="default">
        <Eyebrow>Diseño</Eyebrow>
        <Heading as="h1" size="display">
          Sistema de diseño base
        </Heading>
        <Text size="lead">
          Una base visual cálida, premium y clara para reforzar la confianza en reformas,
          pintura y acabados de calidad.
        </Text>

        <div className="button-row">
          <Button>Solicitar presupuesto</Button>
          <Button variant="secondary">Ver servicios</Button>
          <Button variant="ghost" as="link" href="/">
            Volver al inicio
          </Button>
        </div>
      </Section>

      <Section variant="stone">
        <Heading as="h2" size="h2">
          Tokens principales
        </Heading>

        <div className="token-grid">
          {tokens.map((token) => (
            <div key={token.name} className="token-card">
              <div className="token-swatch" style={{ backgroundColor: token.value }} aria-hidden="true" />
              <div>
                <strong>{token.name}</strong>
                <p>{token.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="h2">
          Componentes base
        </Heading>

        <div className="component-grid">
          <Card>
            <Badge>Premium</Badge>
            <Heading as="h3" size="h3">
              Tarjeta base
            </Heading>
            <Text>
              La estructura visual mantiene espacio, jerarquía y claridad para que cada sección
              reserve el énfasis en el mensaje clave.
            </Text>
          </Card>

          <Card>
            <Eyebrow>Etiqueta</Eyebrow>
            <Heading as="h3" size="h3">
              Componentes de texto
            </Heading>
            <Text>
              Tipografías fluidas, mensajes cortos y buenos contrastes para crear una lectura
              calma y elegante.
            </Text>
          </Card>

          <Card>
            <Heading as="h3" size="h3">
              Botón primario
            </Heading>
            <Text>CTA claro, visible y con buen contraste para la conversión.</Text>
            <Button size="lg">Pedir presupuesto</Button>
          </Card>
        </div>
      </Section>
    </Container>
  );
}
