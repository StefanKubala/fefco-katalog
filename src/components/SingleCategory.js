function SingleCategory({ onChangeCategory, category, text, image }) {
  return (
    <div
      className="single-category"
      onClick={() => onChangeCategory(`${category}`)}
    >
      <img src={image} alt="Obrázok kategórie"></img>
      <p>{text}</p>
    </div>
  );
}

export default SingleCategory;
