import Navbar from "../Fragments/Navbar";

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Navbar />
      <div className="bg-slate-800 text-gray-300 px-10 py-5 flex flex-col gap-5 font-sofia min-h-screen">{children}</div>
    </>
  )
}

export default Layout;