import Logo from "../assets/logo.svg";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <div className="bg-[#FFF06C] py-10 px-5">
      <div className="flex items-center justify-between">
        <img alt="" src={Logo} />
        <ShoppingCartIcon className="h-8" />
      </div>
      <Nav />

      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-9xl flex-1">Stuff From Anythere</h1>
        <p className="font-light text-5xl text-right">
          Launching right now with our service. Manage your finance and buy
          anything what you want
        </p>
      </div>
    </div>
  );
};

export default Header;
