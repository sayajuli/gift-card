import Button from "../Elements/Button/Button";
import { Link } from "react-router";

const IsLikeCoffee = () => {

  return (
    <>
      <h3 className="text-3xl">Good, kalo kamu pendekar kopi</h3>
      <p className="text-xl">Ini aing ada beberapa saran buat penyajian nya yaa, yang pertama  tentunya dijadiin espresso base, mau americano, caffe latte atau yang lainnya, tapi ini harus pake mesin espresso, di ws sebenernya ada mesin espresso tapi portafilternya ga ada jadi harus beli dulu wkwk. Nah, yang kedua tentunya manual brew tapi ditubruk yaa, soalnya ini grind size nya extra fine jadi kalo pake filter kayak v60 atau vietnam drip bakal jelek, paling alternatif lainnya pake moka pot kalo ada, nah dibawah ada tata cara ninyuh kopi nya</p>
      <Link to="/coffee">      
        <Button type="button" className="bg-blue-500 text-gray-300 text-xl w-fit h-fit py-2">Klik ini guys</Button>
      </Link>
    </>
  )
}

export default IsLikeCoffee;