const Tubruk = () => {

  const step = [
    {
      id: 1,
      step: 'Siapkan Bubuk Kopi',
      image: '/img/kopi_bubuk_ready.jpg',
    },
    {
      id: 2,
      step: 'Tuang 1 sdm bubuk kopi ke cangkir 250ml.',
      image: '/img/kopi_bubuk.jpg',
    },
    {
      id: 3,
      step: 'Basahi seluruh bubuk kopi dengan sedikit air panas 92°-96°C.',
      image: '/img/buat-kopi-tubruk.jpg',
    },
    {
      id: 4,
      step: 'Diamkan bubuk kopi 15 detik dan tuang air panas hingga hampir penuh.',
    },
    {
      id: 5,
      step: 'Kopi tubruk dengan ampas mengambang telah selesai.',
    },
    {
      id: 6,
      step: 'Biarkan ampas mengendap alami akan lebih nikmat.',
      image: '/img/kopi_jadi.jpg',
    },
  ]

  return (
    <div className="bg-slate-800 text-gray-300 px-5 md:px-10 py-5 flex flex-col gap-5 font-sofia">
      <p className="text:base md:text-xl">Berikut ini langkah demi langkah membuat kopi tubruk:</p>
      {step.map((item, index) => (
      <ol className="font-bold text-base md:text-xl px-5" key={item.id}>
        <li>{index + 1}. {item.step}
          { item.image ? ( <img src={item.image} alt="kopi" className="w-1/2 md:w-1/6 lg:w-1/5 h-40 object-cover" loading="lazy"/>) : (<br />) }
        </li>
      </ol>
    ))}
    </div>
  )
}

export default Tubruk;