function Modal({ detailImage, number, onCloseModal }) {
  return (
    <div className="lightbox">
      <div className="detail">
        <div className="detail-flex">
          <p>{number}</p>
          <span onClick={() => onCloseModal(false)}>❌</span>
        </div>
        <img src={detailImage} alt="test"></img>
      </div>
    </div>
  );
}

export default Modal;
