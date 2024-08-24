import { useState } from "react";
import { Boxes } from "./boxes";

import "./App.css";
import Modal from "./components/Modal";

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
      <input
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <div>
        <button onClick={() => handleChangeCategory("prirezy")}>Prírezy</button>
        <button onClick={() => handleChangeCategory("klopove-krabice")}>
          Klopové krabice
        </button>
        <button onClick={() => handleChangeCategory("krabice-s-vekom")}>
          Krabice s vekom
        </button>
        <button
          onClick={() => handleChangeCategory("skladane-obaly-a-paletky")}
        >
          Skladané obaly a paletky
        </button>
        <button onClick={() => handleChangeCategory("zasuvacie-obaly")}>
          Zasúvacie obaly
        </button>
        <button onClick={() => handleChangeCategory("zlepene-obaly")}>
          Zasúvacie obaly
        </button>
        <button onClick={() => handleChangeCategory("vnutorne-obalove-prvky")}>
          Vnútorné obalové prvky
        </button>

        <div id="boxList">
          {filteredBoxes.length > 0 ? (
            filteredBoxes.map((box) => (
              <div key={box.id}>
                <h3>{box.description}</h3>
                <img
                  onClick={() =>
                    handleImageClick(box.description, box.detail_image)
                  }
                  src={box.image}
                  alt={box.description}
                />
              </div>
            ))
          ) : (
            <p>Žiadne produkty neboli nájdené.</p>
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
  );
}

export default App;
