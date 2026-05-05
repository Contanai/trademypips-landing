type KineticGlowProps = {
  className?: string;
};

export function KineticGlow({ className = "" }: KineticGlowProps) {
  return <div className={`kinetic-glow ${className}`.trim()} />;
}
