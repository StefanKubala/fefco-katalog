function Modal({ detailImage, number, onCloseModal }) {
  return (
    <div className="detail">
      <p>0{number}</p>
      <span onClick={() => onCloseModal(false)}>❌</span>
      <img src={detailImage} alt="test"></img>
    </div>
  );
}

export default Modal;
