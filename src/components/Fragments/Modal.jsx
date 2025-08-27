import CardModal from "./CardModal";
const Modal = (props) => {
  const { onClose } = props
  return (
    <div className="fixed top-0 left-0 w-screen h-screen p-5 bg-gray-900/70 backdrop-blur-xs flex items-center justify-center z-50">
      <CardModal onClose={onClose}/>
    </div>
  )
}

export default Modal;