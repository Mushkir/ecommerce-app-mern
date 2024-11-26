import React from "react";
import { useParams } from "react-router-dom";
import currencyFormat from "../utils/currencyFormat";

const TheShowProductDetail = () => {
  const { id } = useParams();
  // console.log(id);

  return (
    <div className=" container mx-auto p-4 flex gap-3">
      {/* Product Imgs */}
      <div className="p-2 flex gap-3 w-full max-w-md">
        <div className=" flex flex-col gap-3">
          {[1, 2, 3, 4].map((el) => {
            return (
              <div className=" rounded overflow-hidden" key={el}>
                <img
                  src="https://www.ama-assn.org/sites/ama-assn.org/files/styles/related_article_stub_image_1200x800_3_2/public/2024-04/2024-03-19-CARESIGNAL_1170x780px.png?itok=2VfMKhBy"
                  alt="img"
                  className="w-[5rem] h-[5rem] object-cover rounded"
                />
              </div>
            );
          })}
        </div>

        {/* Main Img */}
        <div>
          <img
            src="https://www.ama-assn.org/sites/ama-assn.org/files/styles/related_article_stub_image_1200x800_3_2/public/2024-04/2024-03-19-CARESIGNAL_1170x780px.png?itok=2VfMKhBy"
            alt="img"
            className="w-[360px] h-[360px] object-cover"
          />
        </div>
      </div>

      {/* Product Detail */}
      <div className="w-full">
        {/* Brand Name */}
        <span>Boat</span>

        {/* Product name */}
        <h3>Airpods 111</h3>

        {/* Category */}
        <small>Airpods</small>

        {/* Price */}
        <div>
          {/* Selling Price */}
          <h2 className="">{currencyFormat(999)}</h2>

          {/* Original price */}
          <h2 className=" line-through">{currencyFormat(999)}</h2>
        </div>

        {/* Buttons */}
        <div>
          <button>Buy</button>
          <button>Add To Cart</button>
        </div>

        {/* Description */}
        <span>Description:</span>
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          similique quas porro, asperiores doloribus aperiam mollitia dolores
          aut non, delectus labore ipsum pariatur ipsa exercitationem quisquam
          magnam libero eligendi sapiente quo sed! Impedit deleniti quo
          praesentium odio. Minima, corporis. Soluta obcaecati dolorem iusto
          optio tempora consectetur facilis quaerat officia, dolore libero aut
          similique excepturi sit adipisci consequuntur mollitia ducimus
          praesentium deleniti fugit at repellendus quasi. Blanditiis provident,
          quo perspiciatis totam nobis distinctio eos error amet doloribus ea
          architecto sit! Corporis iste eligendi ad sint quod! Delectus iusto
          sint corrupti harum odio laboriosam, itaque eum minima tempora rem
          suscipit eius aliquid quibusdam reiciendis atque totam quis
          dignissimos eaque mollitia blanditiis voluptatum, numquam excepturi
          voluptatibus? Non labore nobis nulla enim? Doloribus, voluptatibus
          tenetur ad dolorem at unde? Molestias velit asperiores facere
          consequuntur totam veniam mollitia omnis, aspernatur sunt suscipit,
          maxime eveniet. Nihil pariatur nostrum rem ut molestiae possimus
          necessitatibus blanditiis laboriosam iusto quia voluptatum delectus
          quod perferendis dignissimos ducimus eum non reiciendis provident
          suscipit ab modi, libero quas maiores! Quos molestiae quibusdam modi
          veniam dicta suscipit optio dolor impedit eius rerum nemo placeat
          officia excepturi deserunt recusandae tempore, doloribus cupiditate
          adipisci et non! Neque ipsum asperiores, ipsam ut ducimus adipisci
          possimus labore.
        </p>
      </div>
    </div>
  );
};

export default TheShowProductDetail;
