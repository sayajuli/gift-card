import CardStep from "./CardStep";
const StepMenu = (props) => {
  const { onClickHandler } = props

    const image = [
    {
      title: 'Espresso',
      desc: 'Cocok untuk base membuat cofee lainnya',
      url: '/img/espresso.jpg'
    },
    {
      title: 'Tubruk',
      desc: 'Cocok untuk anda yang ingin ngopi dengan cara tradisional',
      url: '/img/tubruk.jpg'
    },
  ]

  return (
    <div className="flex flex-col items-center mt-5 gap-5 md:flex-row md:justify-center py-10 bg-transparent">
      {image.map((item) => {
        return (
          <CardStep
            key={item.title}
            title={item.title}
            desc={item.desc}
            src={item.url}
            onClickHandler={() => onClickHandler(item.title)}
          ></CardStep>
        )
      })}
    </div>
  )
}

export default StepMenu;