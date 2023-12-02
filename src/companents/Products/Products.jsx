import React, { useState, useEffect } from "react";
import "./products.css";

const Products = () => {
  const [product, setproduct] = useState([]);
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
  });
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setproduct(data.products);
      });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch("https://northwind.vercel.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValues),
      });
      setInputValues({
        input1: "",
        input2: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name + "name");
    console.log(value + "value");
    console.log(event.target);
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <section id="products">
      <form id="form" onSubmit={handleSubmit}>
        <p>FORM</p>
        <input
          type="text"
          placeholder="Məlumat qeyd edin"
          name="input1"
          value={inputValues.input1}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Məlumat qeyd edin"
          name="input2"
          value={inputValues.input2}
          onChange={handleInputChange}
        />
        <button type="submit">Gönder</button>
      </form>
      <div className="setProducts">
        {product &&
          product.map((item, index) => (
            <div className="product" key={index}>
              <img src={item.images} alt="photo" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
