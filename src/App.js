import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import s from "./App.module.css";
import Searchbar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import getImagesCollections from "./servises/image-api";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

const statusOptions = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [largeImageURL, setlargeImageURL] = useState(null);
  //   const [error, setError] = useState("");
  const [status, setStatus] = useState(statusOptions.IDLE);

  const { PENDING, RESOLVED, REJECTED } = statusOptions;

  const getImages = (search, page) => {
    getImagesCollections(search, page)
      .then((response) => {
        setArticles((state) => [...state, ...response]);
        setStatus(statusOptions.RESOLVED);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        // setError(error);
        setStatus(statusOptions.REJECTED);
        console.log(error);
      });
  };

  const handlerSearchForm = (query) => {
    setStatus(statusOptions.PENDING);
    setSearchValue(query);
    setArticles([]);
    setCurrentPage(1);
  };

  const handleIncrement = () => {
    setCurrentPage((state) => state + 1);
  };

  const openModal = (imageUrl) => {
    setlargeImageURL(imageUrl);
  };
  const closeModal = () => {
    setlargeImageURL("");
  };

  useEffect(() => {
    if (searchValue === "") {
      return;
    }
    getImages(searchValue, currentPage);
  }, [searchValue, currentPage]);

  return (
    <>
      <Searchbar onSubmit={handlerSearchForm} />

      {largeImageURL && (
        <Modal closeModal={closeModal}>
          <img src={largeImageURL} alt="" className={s.modalImg} />
        </Modal>
      )}
      {status === PENDING && (
        <Loader
          className={s.loader}
          type="BallTriangle"
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}
      {status === RESOLVED && (
        <section className={s.section}>
          <ImageGallery search={articles} openModal={openModal} />
          <Button incrementPage={handleIncrement} />
        </section>
      )}
      {status === REJECTED && <h1>Упс.....чтото пошло не так</h1>}
      <ToastContainer autoClose={3000} />
    </>
  );
}
