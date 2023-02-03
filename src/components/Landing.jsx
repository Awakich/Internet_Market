import Header from "../components/Header";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer";
import Tabel from "../components/Table/Table";

const Landing = ({ store, users, cardItem, onOpen, active }) => {
  return (
    <div>
      <Header cardItem={cardItem} onOpen={onOpen} />
      <Cards store={store} />
      <Tabel users={users} />
      <Footer />
    </div>
  );
};

export default Landing;
