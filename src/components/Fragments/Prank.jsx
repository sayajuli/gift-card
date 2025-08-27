const Prank = () => {
  return (
    <div className=" flex flex-col items-center text-gray-300 text-center text-lg font-bold px-5 py-5 gap-15 md:text-2xl lg:text-3xl md:px-10">
      <p>Searching weh sorangan da geus gede ieuh, kudu dihuapan wae
        <br />Tara ngopi ieuh maneh mah</p>

      <video src="/vid/kodok.mp4" className="w-lg md:w-2/3 lg:w-1/2" autoPlay={true} loop={true} muted={true} />
    </div>
  )
}

export default Prank;