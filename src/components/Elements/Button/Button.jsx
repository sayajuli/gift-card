const Button = (props) => {
  const { children, className = "bg-blue-500 text-gray-300 text-xl", onclick, type = "button" } = props;
  return (
    <button type={type} className={`h-10 px-6 font-semibold rounded-md ${className} hover:bg-blue-600`} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;