import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Card = ({ id, title, description, images, price }) => {
  return (
    <div className="bg-black p-10 rounded-xl text-white mx-auto transition-all hover:border-[#FFF06C] hover:border-r-[25px] hover:border-b-[20px] hover:cursor-pointer flex flex-col justify-center">
      <img alt="" src={images} className="w-full mb-10 rounded-3xl" />

      <div className="gap-5 flex flex-col">
        <h3 className="font-semibold text-4xl">{title}</h3>
        <p className="font-light text-xl">{description}</p>

        <div className="flex items-center justify-between">
          <p className="font-bold text-2xl">${price}</p>
          <PlusCircleIcon
            onClick={() => console.log("click")}
            className="h-12 text-white hover:text-white/80"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
