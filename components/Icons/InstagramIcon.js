function Icon(props) {
  const { className } = props;
  return (
    <svg width="24" height="24" fill="none" className={className}>
      <path
        fill="url(#paint0_linear)"
        d="M17.31 5.56c-.62 0-1.186.508-1.186 1.186 0 .621.509 1.186 1.187 1.186.621 0 1.186-.508 1.186-1.186-.056-.678-.565-1.187-1.186-1.187z"
      ></path>
      <path
        fill="url(#paint1_linear)"
        d="M12.056 7.085A4.919 4.919 0 007.141 12a4.919 4.919 0 004.915 4.915A4.919 4.919 0 0016.973 12a4.919 4.919 0 00-4.916-4.915zm0 8.079A3.159 3.159 0 018.893 12a3.159 3.159 0 013.163-3.164A3.159 3.159 0 0115.22 12a3.159 3.159 0 01-3.164 3.164z"
      ></path>
      <path
        fill="url(#paint2_linear)"
        d="M16.011 22H7.99C4.712 22 2 19.288 2 16.011V7.99C2 4.712 4.712 2 7.989 2h7.966c3.333 0 5.989 2.712 5.989 5.989v7.966C22 19.288 19.288 22 16.01 22zM7.99 3.864c-2.26 0-4.125 1.865-4.125 4.125v7.966c0 2.26 1.865 4.124 4.125 4.124h7.966c2.26 0 4.124-1.864 4.124-4.124V7.989c0-2.26-1.864-4.125-4.124-4.125H7.989z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="8.13"
          x2="26.258"
          y1="-2.024"
          y2="15.328"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.001" stopColor="#FBE18A"></stop>
          <stop offset="0.209" stopColor="#FCBB45"></stop>
          <stop offset="0.377" stopColor="#F75274"></stop>
          <stop offset="0.524" stopColor="#D53692"></stop>
          <stop offset="0.739" stopColor="#8F39CE"></stop>
          <stop offset="1" stopColor="#5B4FE9"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="3.014"
          x2="21.143"
          y1="3.32"
          y2="20.673"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.001" stopColor="#FBE18A"></stop>
          <stop offset="0.209" stopColor="#FCBB45"></stop>
          <stop offset="0.377" stopColor="#F75274"></stop>
          <stop offset="0.524" stopColor="#D53692"></stop>
          <stop offset="0.739" stopColor="#8F39CE"></stop>
          <stop offset="1" stopColor="#5B4FE9"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="2.975"
          x2="21.104"
          y1="3.361"
          y2="20.714"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.001" stopColor="#FBE18A"></stop>
          <stop offset="0.209" stopColor="#FCBB45"></stop>
          <stop offset="0.377" stopColor="#F75274"></stop>
          <stop offset="0.524" stopColor="#D53692"></stop>
          <stop offset="0.739" stopColor="#8F39CE"></stop>
          <stop offset="1" stopColor="#5B4FE9"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
