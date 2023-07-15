import { useState, useContext } from "react";
import Navbar from "../Navbar/Navbar";

function Bag(props) {
  const [open, setOpen] = useState(props.isOpen);
  console.log(open);

  if (props.isOpen) {
    return (
      <div>
        <button onClick={() => setOpen(false)}>A</button>
      </div>
    );
  }
  <Navbar page="Bag" />;
  return null;
}

export default Bag;
