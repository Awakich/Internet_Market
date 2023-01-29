import NavTop from "./NavTop";

const Header = ({ cardItem }) => {
  return (
    <div className="bg-[#FFF06C] pb-10">
      <NavTop cardItem={cardItem} />
      <div className="flex items-center justify-between px-5">
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
