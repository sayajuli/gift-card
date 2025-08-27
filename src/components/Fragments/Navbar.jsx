import { useState, useEffect } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('guestName'));
  }, [name])

  const logoutHandling = () => {
    localStorage.removeItem('guestName');
  }

  return (
    <nav className="bg-slate-800 px-10 py-3 border-b-1 flex justify-between font-sofia">
      <h1 className="text-3xl text-gray-300 font-bold">Hi, {name}</h1>
      <Link to={"/logout"}>
        <div className="text-3xl text-gray-300 font-bold flex gap-2 cursor-pointer hover:text-gray-100" onClick={logoutHandling}>Logout
          <IoLogOutOutline className="text-4xl" />
        </div>
      </Link>
    </nav>
  )

}

export default Navbar;