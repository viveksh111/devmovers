// DevMovers Logo Mark — a compact SVG geometric mark
// Represents velocity/motion: a bold stylized "DM" formed by a fast-forward
// wedge arrow inside a subtle square frame.

type LogoProps = {
  size?: number;
  /** "dark" = yellow mark on dark bg (for navbar), "light" = dark mark on yellow bg (footer) */
  variant?: "dark" | "light";
  showWordmark?: boolean;
};

export default function Logo({
  size = 36,
  variant = "dark",
  showWordmark = true,
}: LogoProps) {
  const markFill = variant === "dark" ? "#FFE224" : "#131313";
  const bgFill = variant === "dark" ? "#131313" : "#FFE224";
  const textColor = variant === "dark" ? "text-white" : "text-zinc-950";

  return (
    <div className="flex items-center gap-2.5">
      {/* SVG Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="DevMovers logo mark"
      >
        {/* Background square */}
        <rect width="36" height="36" fill={bgFill} />

        {/* Bold "D" wedge — left aligned, hinting at forward motion */}
        <path
          d="M7 8H16C21.5228 8 26 12.4772 26 18C26 23.5228 21.5228 28 16 28H7V8Z"
          fill={markFill}
        />

        {/* Speed slash — the "M" accent, a sharp diagonal cut suggesting velocity */}
        <path
          d="M23 8L30 18L23 28"
          stroke={bgFill}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner cutout to create the hollow "D" */}
        <path
          d="M11 12H15.5C19.0899 12 22 14.9101 22 18.5C22 22.0899 19.0899 25 15.5 25H11V12Z"
          fill={bgFill}
        />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <span
          className={`text-lg font-black tracking-tighter leading-none ${textColor} font-(family-name:--font-plus-jakarta-sans)`}
        >
          Dev<span style={{ color: markFill }}>Movers</span>
        </span>
      )}
    </div>
  );
}
