import NavTop from "../NavTop";
import { useState, useEffect, useContext, memo } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import Modal from "../Modal";

const CardInfo = () => {
  const { AddItem } = useContext(Context);

  const { id } = useParams();
  const navigate = useNavigate();

  const [info, setInfo] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      ).then((res) => res.json());
      setInfo(res);
      setImg(res.category);
    };
    getInfo();
  }, [id]);

  const { title, description, price } = info;
  const { image } = img;

  const BackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#FFF06C] min-h-screen">
      <Modal />
      <NavTop />
      <button
        onClick={BackHandler}
        className="ml-10 px-5 py-2 bg-black text-white rounded-full hover:opacity-90 mb-5"
      >
        Back
      </button>

      <div className="flex items-center justify-center gap-20 px-10">
        <img src={image} alt="" className="rounded-xl" />

        <div className="flex flex-col gap-10 text-right">
          <h2 className="font-semibold text-7xl">{title}</h2>
          <p className="text-2xl font-light">{description}</p>
          <p className="font-semibold text-2xl">${price}</p>
          <button
            onClick={AddItem}
            className="bg-black text-white px-14 py-5 rounded-full hover:opacity-90 font-semibold text-2xl"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CardInfo);
