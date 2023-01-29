import Header from "../components/Header";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer";
import Tabel from "../components/Table/Table";

const Landing = ({ store, users, cardItem }) => {
  return (
    <>
      <Header cardItem={cardItem} />
      <Cards store={store} />
      <Tabel users={users} />
      <Footer />
    </>
  );
};

export default Landing;
