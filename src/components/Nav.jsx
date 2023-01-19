import { useEffect, useState } from "react";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch(
        " https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
      ).then((res) => res.json());
      setCategories(res);
    };
    getCategory();
  }, []);

  return (
    <nav className="mt-5">
      <hr className="border-[1px] border-black" />
      <ul className="flex items-center gap-12 justify-center py-5">
        {categories.map(({ id, name }) => (
          <li className="text-xl" key={id}>{name}</li>
        ))}
      </ul>
      <hr className="border-[1px] border-black" />
    </nav>
  );
};

export default Nav;
