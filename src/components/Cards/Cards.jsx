import { Link } from "react-router-dom";
import Card from "../Cards/Card";

const Cards = ({ store }) => {
  return (
    <div className="mt-20">
      <h2 className="font-medium text-8xl">Get Started</h2>
      <div className="mt-10">
        <hr className="border-[1px] border-black mb-10" />
        <div className="grid grid-cols-3 grid-rows-2 mx-auto gap-10">
          {store.map(({ id, title, description, price, images }) => (
            <Link key={id} to={`/${id}`}>
              <Card
                key={id}
                title={title}
                price={price}
                description={description}
                images={images[0]}
              />
            </Link>
          ))}
        </div>

        <hr className="border-[1px] border-black mt-10" />
      </div>
    </div>
  );
};

export default Cards;
