export default function Icon(props) {
  const { className } = props;
  return (
    <svg width="24" height="24" fill="none" className={className}>
      <g clipPath="url(#clip0)">
        <path
          fill="#337FFF"
          d="M17 13.243l.565-3.616h-3.446V7.254c0-1.017.508-1.977 2.034-1.977h1.582V2.226S16.322 2 14.91 2c-2.882 0-4.746 1.751-4.746 4.859v2.768H7v3.616h3.164V22h3.898v-8.757H17z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h10.735v20H0z" transform="translate(7 2)" />
        </clipPath>
      </defs>
    </svg>
  );
}
