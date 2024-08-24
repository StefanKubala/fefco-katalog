function SingleBox({ box, onImageClick }) {
  return (
    <div
      className="single-box"
      key={box.id}
      onClick={() => onImageClick(box.description, box.detail_image)}
    >
      <h3>{box.description}</h3>
      <img src={box.image} alt={box.description} />
    </div>
  );
}

export default SingleBox;
