const Input = (props) => {
  const { placeholder, type, name } = props;

  return (
    <input type={type} placeholder={placeholder} name={name} className=" px-2 text-gray-700 bg-gray-300 border-none h-10" />
  )
}

export default Input;