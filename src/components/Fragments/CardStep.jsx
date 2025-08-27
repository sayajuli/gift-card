import Button from "../Elements/Button/Button";

const CardStep = (props) => {
  const { src, title, desc, onClickHandler } = props

  return (
      <div className="flex flex-col justify-between w-75 md:w-90 gap-3 h-100 md:h-120 bg-gray-300 p-5 rounded-lg shadow-2xl font-sofia">
        <img src={src} alt={title} className="w-full h-48 md:h-60 object-cover object-center" loading="lazy"/>
        <p className="text-2xl text-center font-bold text-slate-800">{title}</p>
        <p className="text-lg text-center line-clamp-2 text-slate-950">{desc}</p>
        <Button type="button" className="bg-blue-500 text-gray-300 text-xl md:w-fit h-fit py-2" onclick={onClickHandler}>Klik ini guys</Button>
      </div>
  )
}

export default CardStep;