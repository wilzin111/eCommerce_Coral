import { useState } from "react";
import "./RegProducts.css";
import { db, storage } from "../../FireBaseConnection";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";

export default function RegisterProducts() {
  const [name, setName] = useState("");
  const [subname, setSubName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [colour, setColour] = useState("");
  const [pic, setPic] = useState("");
  const [id, setId] = useState("");

  function handleImage() {
    if (!pic) {
      console.log("nenhuma foto cadastrada");
      return;
    }

    const storageRef = ref(storage, `images/products/${id}`);
    const uploadTask = uploadBytesResumable(storageRef, pic);
  }

  async function handleRegister(e) {
    e.preventDefault();

    handleImage();

    await addDoc(collection(db, "products"), {
      name: name,
      subname: subname,
      price: price,
      discount: discount,
      quantity: quantity,
      category: category,
      brand: brand,
      colour: colour,
      id: id,
    })
      .then(() => {
        setName("");
        setSubName(""), setPrice("");
        setDiscount("");
        setQuantity("");
        setCategory("");
        setBrand("");
        setColour("");
        setId("");
        console.log("aaaaaaaa");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="page-wrapper-products">
        <form className="rp-content" onSubmit={handleRegister}>
          <div className="select-container-rp">
            <p>Nome do produto:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="select-container-rp">
            <p>Mini descrição:</p>
            <input
              type="text"
              value={subname}
              onChange={(e) => setSubName(e.target.value)}
            ></input>
          </div>

          <div className="select-container-rp">
            <p>Preço:</p>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>

          <div className="select-container-rp">
            <p>Desconto:</p>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            ></input>
          </div>

          <div className="select-container-rp">
            <p>Quantidade:</p>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </div>

          <div className="select-container-rp">
            <p>Categoria</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option></option>
              <option>Handbags</option>
              <option>Watches</option>
              <option>Skincare</option>
              <option>Jewellery</option>
              <option>Apparels</option>
            </select>
          </div>

          <div className="select-container-rp">
            <p>Marca</p>
            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option></option>
              <option>Zara</option>
              <option>D&G</option>
              <option>H&M</option>
              <option>Chanel</option>
              <option>Prada</option>
              <option>BIBA</option>
            </select>
          </div>

          <div className="select-container-rp">
            <p>Cor</p>
            <select value={colour} onChange={(e) => setColour(e.target.value)}>
              <option></option>
              <option>Blue</option>
              <option>Teal</option>
              <option>Aquamarine</option>
              <option>Off-White</option>
              <option>Marron Red</option>
              <option>Crimson Red</option>
              <option>Seinna Pink</option>
              <option>Muave Orange</option>
            </select>
          </div>

          <div className="select-container-rp">
            <p>ID</p>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>

          <div className="select-container-rp">
            <p>Foto do produto</p>
            <input
              type="file"
              onChange={(e) => setPic(e.target.files[0])}
            ></input>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}
