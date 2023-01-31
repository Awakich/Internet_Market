import Header from "../components/Header";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer";
import Tabel from "../components/Table/Table";
import Modal from "./Modal";

const Landing = ({ store, users, cardItem, onOpen, active }) => {
  return (
    <>
      <Header cardItem={cardItem} onOpen={onOpen} />
      <Modal active={active} onOpen={onOpen}>
        <p>{cardItem}</p>
      </Modal>
      <Cards store={store} />
      <Tabel users={users} />
      <Footer />
    </>
  );
};

export default Landing;
