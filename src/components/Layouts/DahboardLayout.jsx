import { useState, useEffect } from "react";
import Layout from "./Layout";

const DashboardLayout = (props) => {
  const { children } = props;
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('guestName'));
  }, [])

  return (
    <Layout>

      <h1 className="text-2xl md:text-4xl font-bold">Hi {name}, selamat telah memenangkan hadiah yang tidak seberapa ini</h1>
      <p className="text-base md:text-xl">Sebelumnya sorry, kalo giftnya masih kureng yaa, wajarlah tanggal tua awokawok. Nah ini tuh kopi bubuk Batavia Espresso, gua sih ga tau ya umak  suka ngopi apa engga. <br />
        Tapi, yang paling penting kalo ga suka kopi pun jangan dibuang, lebar anjay soalna ieu kopi 70% arabica 30% robusta, jadi blend kitu lah. Ditambah ini teh karena masih dominan arabica, kalo kamu punya penyakit maag, biasanya mah masih aman asal minumnya kopi murni ga pake susu apalagi skm, sama ga pake gula juga. Untuk spek kopinya biar jelas ada dibawah yaaw....</p>
      <p className="text-base md:text-xl">Origin:  Robusta Ciwidey G1 30%, Pure Arabica 50% ( Grade Komersil Ijen, Ciwidey, Gn. Halu ), Ciwidey Washed Process 20% <br />
        Roast Level: Medium Dark <br />
        Tasting Note: Bourbon, Dark Caramel, Red Apple & Papaya <br />
        Brewing Recommendation : Espresso Base, French Press, Mokapot & Aeropress</p>
      <p className="text-base md:text-xl">Batavia Espresso mempunyai profileyang bold, fruity dan long aftertaste. Diblend khusus untuk penggunaan mesin espresso untuk menghasilkan milk based coffee drinks dengan texture bold nutty caramel dan flavour karakteristik bourbon dan sweet. Kopi ini tidak juga kalah saat di serve black seperti long black atau americano, menghasilkan texture yang syruppy, pekat dan aftertaste yang menempel di lidah. Espresso blend ini juga memiliki crema tebal dan aroma yang kuat dalam bentuk espresso.</p>
      {children}
    </Layout>

  )
}

export default DashboardLayout;