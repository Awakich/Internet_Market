import { useEffect, useState } from "react";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch(
        " https://api.escuelajs.co/api/v1/categories?&offset=0&limit=8"
      ).then((res) => res.json());
      setCategories(res);
    };
    getCategory();
  }, []);

  const names = [];

  for (let i in categories) {
    const len = categories[i].name.length;
    if (len > 3) {
      names.push(categories[i].name);
    }
  }

  return (
    <nav className="mt-5">
      <hr className="border-[1px] border-black" />
      <ul className="flex items-center gap-12 justify-center py-5">
        {names.map((name) => (
          <li key={name} className="text-xl">
            {name}
          </li>
        ))}
      </ul>
      <hr className="border-[1px] border-black" />
    </nav>
  );
};

export default Nav;
