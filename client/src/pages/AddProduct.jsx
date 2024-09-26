import React, { useState } from "react";
import imageToBase64 from "../helpers/helper";

const AddProduct = () => {
  const [productImg, setProductImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [brand, setBrand] = useState("");

  //   console.log(productImg);

  const handleProductImageUpload = async (e) => {
    const file = e.target.files[0];

    const prodImg = await imageToBase64(file);

    setProductImg(prodImg);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:8080/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, desc, brand, image: productImg }),
      });

      const data = await resp.json();

      console.log(data);
    } catch (error) {
      console.error(`From Add product: ${error}`);
    }
  };

  return (
    <div className="bg-red-500 max-w-lg mx-auto p-5 mt-20">
      <h3>Create Product</h3>

      <form action="" method="post" onSubmit={handleSubmit}>
        <img
          src={productImg ? productImg : ""}
          className="w-[100px] h-[100px] rounded-full"
          alt=""
        />

        <input
          type="file"
          onChange={handleProductImageUpload}
          accept="image/"
        />

        <select required onChange={(e) => setBrand(e.target.value)}>
          <option value="">Select brand</option>
          <option value="iPhone">iPhone</option>
          <option value="Samsung">Samsung</option>
          <option value="Xiomi">Xiomi</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          required
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          required
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          required
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
