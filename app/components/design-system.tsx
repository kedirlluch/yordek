import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}

type SectionProps = {
  children: ReactNode;
  variant?: 'default' | 'stone' | 'dark';
  className?: string;
};

export function Section({ children, variant = 'default', className = '' }: SectionProps) {
  return <section className={`section section-${variant} ${className}`.trim()}>{children}</section>;
}

type HeadingProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'display' | 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

export function Heading({
  children,
  as = 'h2',
  size = 'h2',
  className = '',
}: HeadingProps) {
  const Component = as;
  return <Component className={`heading heading-${size} ${className}`.trim()}>{children}</Component>;
}

type TextProps = {
  children: ReactNode;
  as?: 'p' | 'span' | 'small';
  size?: 'lead' | 'body' | 'small';
  className?: string;
};

export function Text({ children, as = 'p', size = 'body', className = '' }: TextProps) {
  const Component = as;
  return <Component className={`text text-${size} ${className}`.trim()}>{children}</Component>;
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`.trim()}>{children}</p>;
}

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  as?: 'button' | 'link';
  href?: string;
  loading?: boolean;
  disabled?: boolean;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>>;

export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  as = 'button',
  href = '#',
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const classes = `button button-${variant} button-${size} ${className}`.trim();

  if (as === 'link') {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled || loading || undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {loading ? 'Cargando...' : children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {loading ? 'Cargando...' : children}
    </button>
  );
}

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <article className={`card ${className}`.trim()}>{children}</article>;
}

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = '' }: BadgeProps) {
  return <span className={`badge ${className}`.trim()}>{children}</span>;
}
