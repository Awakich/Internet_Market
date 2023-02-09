import Logo from "../assets/logo.svg";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Context } from "../context";

const NavTop = () => {
  const { cardItem, openHandler } = useContext(Context);
  return (
    <div className="bg-[#FFF06C] py-10 px-5">
      <div className="flex items-center justify-between ">
        <img alt="" src={Logo} />
        <ShoppingCartIcon
          onClick={openHandler}
          className="h-8 relative opacity-100 hover:cursor-pointer hover:opacity-60"
        />
        <div className="bg-white font-bold text-sm rounded-full absolute right-16 top-14 px-1 py-[0.5px] opacity-90">
          {cardItem.length}
        </div>
      </div>
      <hr className="border-black border-[1px] mt-5" />
    </div>
  );
};

export default NavTop;
