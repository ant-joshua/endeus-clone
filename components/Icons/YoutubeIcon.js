function Icon(props) {
  const { className } = props;
  return (
    <svg width="24" height="24" fill="none" className={className}>
      <path
        fill="red"
        d="M22 9.389C22 6.944 20 5 17.611 5H6.39A4.363 4.363 0 002 9.389v5.222A4.363 4.363 0 006.389 19H17.61A4.363 4.363 0 0022 14.611V9.39zm-6.611 3l-5 2.5c-.222.111-.889-.056-.889-.278V9.5c0-.222.667-.389.889-.278l4.833 2.611c.167.167.39.445.167.556z"
      />
    </svg>
  );
}

export default Icon;
