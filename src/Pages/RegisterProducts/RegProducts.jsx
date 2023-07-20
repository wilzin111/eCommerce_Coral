import "./RegProducts.css";

export default function RegisterProducts() {
  return (
    <>
      <div className="rp-content">
        <div className="select-container-rp">
          <p>Nome do produto:</p>
          <input type="text"></input>
        </div>

        <div className="select-container-rp">
          <p>Preço:</p>
          <input type="number"></input>
        </div>

        <div className="select-container-rp">
          <p>Desconto:</p>
          <input type="number"></input>
        </div>

        <div className="select-container-rp">
          <p>Quantidade:</p>
          <input type="number"></input>
        </div>

        <div className="select-container-rp">
          <p>Categoria</p>
          <select>
            <option></option>
            <otion>Handbags</otion>
            <option>Watches</option>
            <option>Skincare</option>
            <option>Jewellery</option>
            <option>Apparels</option>
          </select>
        </div>

        <div className="select-container-rp">
          <p>Marca</p>
          <select>
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
          <select>
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
          <p>Foto do produto</p>
          <input type="file"></input>
        </div>

        <button>Enviar</button>
      </div>
    </>
  );
}
