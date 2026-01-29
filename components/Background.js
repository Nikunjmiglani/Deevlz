export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">

      {/* Light mode background */}
      <div
        className="absolute inset-0 bg-white dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(203,213,225,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203,213,225,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Dark mode background */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

    </div>
  );
}
