import "./Modal.css";
function Modal({ open, onclase }) {
  if (!open) return null;
  return (
    <>
      <div className="ovarlay" onClick={onclase}></div>
      <div className="Modal">
        <button onClick={onclase} className="clase">
          X
        </button>
        <h1>Make Your Order Now!</h1>
        <form>
          <div className="d-flex gap-4">
            <input placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <input placeholder="Address" />
          <input placeholder="Zip Code" type="number" />
          <input placeholder="Mobile num:" />
          <select>
            <option>Rainbow Vegetable Sandwich</option>
            <option>Vegetarian Burger</option>
            <option>Raspberry Stuffed French Toast</option>
          </select>
          <button onClick={onclase}>Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Modal;
