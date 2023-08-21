import { BiSolidPhoneCall } from "react-icons/bi";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="h-20 flex justify-between px-10 text-white shadow-2xl">
      <img className="h-28 sm:ml-8" src={logo} alt="logo" />
      <ul className="flex items-center gap-6 md:text-xl">
        <li>Services</li>
        <li>About Us</li>
        <li>Career</li>
        <li>Contact</li>
        <li>
          <BiSolidPhoneCall size={"30px"} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
