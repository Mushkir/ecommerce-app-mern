> WIP

1. Get the product id
2. Get the product detail to respective page
3. Send the request to api to get product detail by id
4. Get the product detail from api response
5. Show in frontend

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
      <div className="w-full py-2">
        {/* Brand Name */}
        <span className=" bg-red-200 text-red-700 px-2 py-1 rounded-full">
          Boat
        </span>

        {/* Product name */}
        <h3 className=" mt-2 text-4xl font-semibold">Airpods 111</h3>

        {/* Category */}
        <small className=" text-slate-400">Airpods</small>

        {/* Price */}
        <div className=" flex items-center gap-2">
          {/* Selling Price */}
          <h2 className=" text-2xl font-semibold text-red-600">
            {currencyFormat(999)}
          </h2>

          {/* Original price */}
          <h2 className=" text-2xl font-semibold line-through text-slate-400">
            {currencyFormat(999)}
          </h2>
        </div>

        {/* Buttons */}
        <div className=" flex items-center gap-4 mt-3 mb-3">
          <button className=" px-5 min-w-24 border border-red-600 rounded py-1 text-red-600 hover:bg-red-600 hover:text-white transition-all">
            Buy
          </button>
          <button className=" px-5 min-w-24 bg-red-600 border border-red-600 rounded py-1 text-white hover:bg-white hover:text-red-600 transition-all">
            Add To Cart
          </button>
        </div>

        {/* Description */}
        <span className=" font-semibold">Description:</span>
        <p className=" text-justify text-slate-600">
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
