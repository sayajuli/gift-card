const Espresso = () => {

  const step = [
    {
      id: 1,
      title: 'Timbang Kopi',
      content: [
        'Timbang bubuk kopi sekitar 18-20 gram untuk portafilter double shot (atau sesuai ukuran portafilter Anda).'
      ],
      image: '/img/kopi_timbang.jpg'
    },
    {
      id: 2,
      title: 'Isi dan Ratakan Portafilter',
      content: [
        'Masukkan bubuk kopi ke portafilter. Ratakan permukaan dengan jari atau alat distribusi kopi agar bubuk kopi tersebar merata.'
      ],
      image: '/img/distribution_kopi.jpeg'
    },
    {
      id: 3,
      title: 'Tamping (Memadatkan Kopi)',
      content: [
        'Gunakan tamper untuk memadatkan bubuk kopi dengan tekanan yang konsisten (sekitar 15-20 kg). Tamping yang baik menghasilkan permukaan yang rata, sehingga ekstraksi lebih merata.'
      ],
      image: '/img/tamping_kopi.jpg'
    },
    {
      id: 4,
      title: 'Pasang Portafilter ke Mesin',
      content: [
        'Pasang portafilter ke grup kepala mesin. Putar hingga terkunci dengan kuat, tetapi jangan terlalu keras.'
      ],
      image: '/img/portaToMesin.jpg'
    },
    {
      id: 5,
      title: 'Ekstraksi Espresso',
      content: [
        'Tempatkan cangkir di bawah portafilter.',
        'Tekan tombol ekstraksi atau tarik tuas mesin.',
        'Biarkan mesin mengekstraksi selama 25-30 detik untuk menghasilkan sekitar 30-40 ml espresso (single shot) atau 60-80 ml (double shot).',
        'Perhatikan aliran kopi. Idealnya, aliran harus seperti “ekor tikus,” tidak terlalu cepat atau lambat.'
      ],
      image: '/img/ekstraksi.jpg'
    },
  ]

  return (
  <div className="bg-slate-800 text-gray-300 px-5 md:px-10 py-5 flex flex-col gap-5 font-sofia">
    <p className="text:base md:text-xl">Berikut ini langkah demi langkah membuat espresso menggunakan mesin:</p>
    {step.map((item, index) => (
      <ol className="font-bold text-base md:text-xl px-5" key={item.id}>
        <li>{index + 1}. {item.title}</li>
        <ul className="font-normal text-base md:text-lg list-disc list-inside mb-2">
          {item.content.map((content) => (
            <li key={content}>{content}</li>
          ))}
        </ul>
        <img src={item.image} alt="kopi" className="w-1/2 md:w-1/6 lg:w-1/5 h-40 object-cover" loading="lazy"/>
      </ol>
    ))}

    <p className="text:base md:text-xl">Nah kalo udah jadi espresso kayak gini, kalian bebas berkreasi, mau di minum langsung boleh, mau ditambah es + air jadi americano atau tambah susu jadi coffee latte bebas dah suka-suka kalian</p>

    <p className="text:base md:text-xl">Kalo udah, jangan lupa <b>KUMBAHAN DEUI URUTNA</b></p>
  </div>
  )
}

export default Espresso;