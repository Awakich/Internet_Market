import { Context } from "../../context";
import { memo, useContext } from "react";
import ModalInfo from "./ModalInfo";

const Modal = () => {
  const { open, openHandler, cardItem, RemoveItem } = useContext(Context);

  return (
    <div className="">
      {open && (
        <div className="">
          <div className="bg-black/90 text-white font-semibold text-xl rounded-md px-12 py-6 fixed w-[100vw] h-[100vh] z-10">
            <button
              onClick={openHandler}
              className="font-bold text-white text-3xl absolute right-36"
            >
              X
            </button>

            <h2 className="font-medium text-4xl">
              {cardItem.length} Items in the cart
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-12 pr-24">
              {cardItem.map(({ title, description, id, price, image }) => (
                <ModalInfo
                  title={title}
                  description={description}
                  image={image}
                  price={price}
                  key={id}
                  id={id}
                  onRemove={() => RemoveItem(id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Modal);
