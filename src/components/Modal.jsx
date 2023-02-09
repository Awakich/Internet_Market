import { Context } from "../context";
import { memo, useContext } from "react";

const Modal = () => {
  const { open, openHandler, cardItem } = useContext(Context);

  return (
    <div>
      {open && (
        <div className="">
          <div className="bg-black/90 text-white font-semibold text-xl rounded-md px-12 py-6 fixed w-[100vw] h-[100vh] z-10">
            <button
              onClick={openHandler}
              className="font-bold text-white text-3xl absolute right-36"
            >
              X
            </button>

            <h2 className="font-medium text-4xl">{cardItem.length} Items in the cart</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Modal);
