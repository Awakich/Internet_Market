const ModalInfo = ({ price, title, description, onRemove, image }) => {
  return (
    <div className="flex items-center justify-between gap-12 bg-white text-black px-3 py-3 rounded-md">
      <div className="flex gap-12">
        <img src={image} alt="" className="rounded-sm h-auto w-52 shadow" />
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl">{title}</h3>
          <p className="font-light text-lg flex max-w-screen-sm">
            {description}
          </p>
          <p>${price}</p>
        </div>
      </div>
      <button className="text-2xl" onClick={onRemove}>
        X
      </button>
    </div>
  );
};

export default ModalInfo;
