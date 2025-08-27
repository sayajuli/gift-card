import Button from "../Elements/Button/Button";
const Question = (props) => {
  const { setIsCoffee } = props

  return (
    <>
      <p className="text-xl">Saacan dilanjut jawab heula ieu nyakkk!!!</p>
      <div className="flex flex-col gap-5">
        <h4 className="text-2xl text-center">Sok ngopi/resep kopi teu?</h4>
        <div className="flex flex-col md:flex-row gap-5 justify-center pb-3">
          <Button type="button" className="bg-blue-500 text-gray-300 text-base md:text-xl w-full h-full py-2" onclick={() => setIsCoffee(true)}>Iya dong, pendekar kopi</Button>
          <Button type="button" className="bg-red-300 text-slate-700 text-base md:text-xl hover:bg-red-400 w-full h-full py-2" onclick={() => setIsCoffee(false)}>Ga, aku mah suka matcha</Button>
        </div>
      </div>
    </>
  )
}

export default Question;