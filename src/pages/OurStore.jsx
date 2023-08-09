import React from "react";
import shopItems from "../assets/store/shop-items.jpg";
// import bead1 from "../assets/store/CITY-STREETWYZE-1.jpg";
import bead1 from "../assets/store/city1.jpg";
import bead2 from "../assets/store/city2.jpg";
import bead3 from "../assets/store/city3.jpg";

const OurStore = () => {
  return (
    <>
      <div className="pt-[0.75rem] bg-black">
        <div className="text-white p-10 md:p-[6rem]">
          <h1 className="text-[2rem] font-bold">T-Shirts and Tote bags</h1>
          <p className="mt-[2rem] md:text-lg">
            Indulge in a touch of Cape Town's essence by owning our proudly
            crafted T-shirts. These wearable treasures are the fruit of a
            collaborative effort with a local printing and manufacturing
            company. This partnership is an embodiment of our commitment to not
            only offer outstanding products but also to foster local connections
            and creativity, with a promise of more remarkable items on the
            horizon.
          </p>
          <p className="mt-[2rem] md:text-lg">
            The significance of your purchase extends beyond the T-shirt itself.
            The proceeds generated from our merchandise sales serve as a vital
            lifeline, fuelling the evolution of our application's development
            and bolstering our strategic marketing endeavours. Your support
            directly contributes to the realization of our vision, propelling us
            closer to becoming the leading Tourism Safety Application.
          </p>
          <p className="mt-[2rem] md:text-lg">
            To secure one of these exquisite T-shirts and join us on this
            journey, a simple click will transport you to our dedicated
            e-commerce store. We eagerly anticipate your engagement and feedback
            as we forge ahead. Once again, we express our deepest appreciation
            and wholeheartedly welcome you to the growing StreetWyze team, where
            your involvement leaves an indelible mark.
          </p>
          <div className="flex flex-col md:flex-row justify-center align-middle p-4 mt-[2rem]">
            <img
              src={shopItems}
              alt="streetwyze image"
              className="rounded-md p-2"
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-black p-10 md:p-[6rem]">
        <h1 className="text-[2rem] font-bold">Beaded products</h1>
        <p className="mt-[2rem] md:text-lg">
          We've joined forces with a talented group of South African artisans
          who specialize in crafting stunning beaded products. From exquisite
          proteas to intricate depictions of the "Big Five" and elegant key
          rings, their creations showcase remarkable artistry. By featuring
          their products on our website, we're dedicated to introducing these
          artisans to new markets and offering customizable options to our
          customers, while also supporting local talent and promoting cultural
          heritage.
        </p>
        <p className="mt-[2rem] md:text-lg">
          Our collaboration is a testament to our commitment to local enterprise
          and cultural preservation. Through this partnership, we aim to
          transcend boundaries, celebrate creativity, and create a meaningful
          impact. Join us in this journey to discover unique artistry and
          contribute to the growth of these artisans within a global community.
        </p>
        <div className="flex flex-col md:flex-row justify-center align-middle p-4 gap-16 mt-12">
          <img
            src={bead1}
            alt="streetwyze image"
            className="mt-4 rounded-md"
            height="300"
            width="360"
          />
          <img
            src={bead2}
            alt="streetwyze image"
            className="mt-4 rounded-md"
            height="300"
            width="360"
          />
          <img
            src={bead3}
            alt="streetwyze image"
            className="mt-4 rounded-md"
            height="300"
            width="360"
          />
        </div>
      </div>
    </>
  );
};

export default OurStore;
