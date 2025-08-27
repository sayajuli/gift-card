import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";

const CardModal = (props) => {
  const { onClose } = props

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    localStorage.setItem('guestName', name);
    window.location.reload();
    onClose()
  }

  return (
    <div className="h-fit w-fit flex flex-col gap-10 bg-slate-500 p-10 rounded-md text-center">
      <h1 className="text-3xl text-gray-300 font-bold">Hi, congrats
        <br /> Biar enak isi nama dulu
      </h1>


      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input type="text" name="name" placeholder="Nama Kamu" />
        <Button type="submit" className="bg-blue-500 text-gray-300 text-xl">Submit</Button>
      </form>
    </div>
  )
}

export default CardModal;