import { useState, useEffect } from "react";

const LogoutPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowVideo(true), 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {showVideo ? (
        <>
        <h1 className="text-2xl font-bold">Maaf Kalo banyak kurangnya</h1>
          <video src="/vid/hidupJKW.mp4" className="w-lg md:w-2/3 lg:w-1/2" autoPlay={true} loop={true} controls={true}/>

          <p>Ucapan Spesial Dari Saya☝️</p>
        </>
      ) : (
        <>        
        <p>Kamu udah logout</p>
        <p>Tunggu 3 detik</p>
        </>
      )}
    </div>
  )
}

export default LogoutPage;