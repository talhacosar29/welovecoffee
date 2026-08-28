type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className, inverted = false }: LogoProps) {
  const ring = inverted ? "#1C1714" : "#E9E1D6";
  const fill = inverted ? "#F5F1EA" : "#1C1714";
  const ink = inverted ? "#1C1714" : "#F5F1EA";

  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="38.5" fill={fill} stroke={ring} strokeWidth="1.5" />
      <circle cx="40" cy="40" r="35.5" stroke={ink} strokeOpacity="0.18" />
      <g transform="translate(28 16)" stroke={ink} strokeWidth="1.2" fill="none">
        <path d="M8 2c0 3-1.4 4-1.4 7" strokeLinecap="round" />
        <path d="M12 1.5c0 3.2-1.6 4.2-1.6 7.2" strokeLinecap="round" />
        <path d="M16 2c0 3-1.4 4-1.4 7" strokeLinecap="round" />
        <path d="M5 12h12c.8 0 2 .8 2 2.2S18 16.5 17 16.5H5.5C4 16.5 3 15.4 3 14.1 3 12.8 4 12 5 12Z" />
        <path d="M17 13.2h2.2c1.4 0 2.6 1 2.6 2.3 0 1.4-1.2 2.4-2.6 2.4H16.6" />
        <path d="M6.2 16.6h11.2V18c0 3.4-2.4 6-5.6 6s-5.6-2.6-5.6-6v-1.4Z" />
      </g>
      <text
        x="40"
        y="50"
        textAnchor="middle"
        fill={ink}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="6.2"
        fontWeight="700"
        letterSpacing="0.12"
      >
        WE LOVE
      </text>
      <text
        x="40"
        y="58.5"
        textAnchor="middle"
        fill={ink}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="6.2"
        fontWeight="700"
        letterSpacing="0.08"
      >
        COFFEE
      </text>
    </svg>
  );
}
