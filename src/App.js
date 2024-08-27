import { useState } from "react";
import { Boxes } from "./boxes";

import "./App.css";

import Modal from "./components/Modal";
import SingleBox from "./components/SingleBox";
import SingleCategory from "./components/SingleCategory";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [query, setQuery] = useState("");
  const [detailImage, setDetailImage] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState("klopove-krabice");

  function handleOpenModal() {
    setIsOpenModal((open) => !open);
  }

  function handleImageClick(number, detailImage) {
    setDetailImage(detailImage);
    handleOpenModal();
    setNumber(number);
  }

  function handleChangeCategory(category) {
    setCategory(category);
    setQuery("");
  }

  const filteredBoxes = Boxes.filter((box) => {
    const matchesCategory = !category || box.category === category;
    const matchesSearchTerm = box.description
      .toLowerCase()
      .includes(query.toLowerCase());

    if (query) {
      return matchesSearchTerm;
    }

    return matchesCategory;
  });

  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="container">
        <div className="left-box">
          <input
            className="search"
            type="tel"
            placeholder="Zadajte číslo"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <div className="categories-buttons">
            <SingleCategory
              onChangeCategory={handleChangeCategory}
              category={"prirezy"}
              text={"01 Prírezy"}
              image={
                "https://mtobaly.sitecloud.sk/wp-content/uploads/2024/08/0100-2.gif"
              }
            />
            <SingleCategory
              onChangeCategory={handleChangeCategory}
              category={"klopove-krabice"}
              text={"02 Klopové krabice"}
              image={
                "https://mtobaly.sitecloud.sk/wp-content/uploads/2024/08/0200-3.gif"
              }
            />
            <SingleCategory
              onChangeCategory={handleChangeCategory}
              category={"krabice-s-vekom"}
              text={"03 Krabice s vekom"}
              image={
                "https://mtobaly.sitecloud.sk/wp-content/uploads/2024/08/0300-2.gif"
              }
            />
            <SingleCategory
              onChangeCategory={handleChangeCategory}
              category={"skladane-obaly-a-paletky"}
              text={"04 Skladané obaly a paletky"}
              image={
                "https://mtobaly.sitecloud.sk/wp-content/uploads/2024/08/0401.gif"
              }
            />
            <SingleCategory
              onChangeCategory={handleChangeCategory}
              category={"zasuvacie-obaly"}
              text={"05 Zasúvacie obaly"}
              image={
                "https://mtobaly.sitecloud.sk/wp-content/uploads/2024/08/0501.gif"
              }
            />
            <SingleCategory
              onChangeCategory={handleChangeCategory}
              category={"zlepene-obaly"}
              text={"07 Zlepené obaly"}
              image={
                "https://mtobaly.sitecloud.sk/wp-content/uploads/2024/08/0700.gif"
              }
            />
            <SingleCategory
              onChangeCategory={handleChangeCategory}
              category={"vnutorne-obalove-prvky"}
              text={"09 Vnútorné obalové prvky"}
              image={
                "https://mtobaly.sitecloud.sk/wp-content/uploads/2024/08/0900.gif"
              }
            />
          </div>
        </div>

        <div className="right-box">
          <div className="box-list">
            {filteredBoxes.length > 0 ? (
              filteredBoxes.map((box) => (
                <SingleBox box={box} onImageClick={handleImageClick} />
              ))
            ) : (
              <p className="no-products">Žiadne produkty neboli nájdené.</p>
            )}
          </div>
        </div>

        {isOpenModal && (
          <Modal
            onCloseModal={handleImageClick}
            detailImage={detailImage}
            number={number}
          />
        )}
      </div>
    </div>
  );
}

export default App;
