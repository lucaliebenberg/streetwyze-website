import React from "react";

function OurApp() {
  return (
    <>
      <div className="bg-black min-h-[40vh] p-5 flex flex-row justify-center align-middle pt-[4rem] pb-[4rem]">
        <img
          src="https://picsum.photos/500/300"
          alt="streetwyze image"
          className="rounded-sm"
          width="500"
          height="300"
        />
      </div>
      <div className="bg-white text-back p-16">
        <p className="text-md md:text-lg">
          Travel with peace of mind, knowing you have TravelWyze by your side.
          Our comprehensive safety education equips you with essential tips for
          a worry-free journey in Cape Town. From SAPS to emergency responders'
          contact details, we've got you covered. So set out on your adventure,
          explore the beauty of Cape Town, and let TravelWyze be your safety
          companion on the road to unforgettable experiences.
        </p>
        <br />
        <p className="text-md md:text-lg">
          The StreetWyze Score is a comprehensive rating system that ensures
          your safety and enhances your overall experience while using the
          StreetWyze app. It is composed of several key components that provide
          a holistic view of each establishment listed on our platform:
        </p>
        <br />
        <ul>
          <li className="mt-6">
            <strong>Safety First:</strong> This aspect of the StreetWyze Score
            focuses on the safety measures implemented by the establishment. We
            take into account the safety protocols, emergency exits, and overall
            preparedness to handle any unforeseen situations, ensuring your
            well-being throughout your visit.
          </li>
          <li className="mt-6">
            <strong>Delightful Dining:</strong> For the EatWyze component, the
            StreetWyze Score evaluates restaurants based on the quality of their
            food and drinks. We curate only the finest culinary experiences,
            ensuring that you can savour the flavours of Cape Town with utmost
            satisfaction.
          </li>
          <li className="mt-6">
            <strong>Ambiance & Atmosphere:</strong> This component assesses the
            ambiance and atmosphere of the establishment. Whether you're dining
            in a cozy cafe or experiencing an exciting activity, we want to
            ensure that the environment enriches your overall experience.
          </li>
          <li className="mt-6">
            <strong>Secure Surroundings:</strong> TravelWyze considers the
            safety of the area surrounding the establishment. We provide
            insights into the local security situation to help you make informed
            decisions about your outing.
          </li>
          <li className="mt-6">
            <strong>Data-Driven Insights:</strong> To make our ratings even more
            reliable, the StreetWyze Score encompasses SAPS crime statistics and
            research. This ensures that the ratings are based on factual data,
            giving you added peace of mind.
          </li>
        </ul>
        <br />
        <p className="text-md md:text-lg">
          By amalgamating these vital components, the StreetWyze Score offers an
          accurate and well-rounded evaluation of each establishment, enabling
          you to choose activities and restaurants with confidence. It's our way
          of making sure you have an unforgettable experience in Cape Town, all
          while prioritizing your safety. So come, explore, and let the
          StreetWyze Score be your guide to an extraordinary journey in the
          city!
        </p>
      </div>
      <div className="bg-black h-auto w-full p-5 flex flex-col md:flex-row justify-around align-middle gap-12">
        <img
          src="https://picsum.photos/500/300"
          alt="streetwyze image"
          className="rounded-sm"
          width="500"
          height="300"
        />
        <img
          src="https://picsum.photos/500/300"
          alt="streetwyze image"
          className="rounded-sm"
          width="500"
          height="300"
        />
      </div>
      <div className="h-auto w-full bg-white text-black">
        <h1 className="text-[1.6rem] md:text-[2rem] md:pt-8 font-bold p-12">
          EatWyze: Savour the Flavour, Support Local
        </h1>
        <div className="flex flex-row justify-center align-middle pt-[4rem] pb-[4rem] p-8">
          <img
            src="https://picsum.photos/500/300"
            alt="streetwyze image"
            className="rounded-sm"
            width="500"
            height="300"
          />
        </div>
        <p className=" p-12 md:text-lg">
          Delight in Cape Town's vibrant culinary scene with EatWyze. We curate
          the finest restaurants that capture the essence of the city's flavours
          while promoting local businesses. Enjoy your dining experiences with
          confidence, as we provide safety tips to ensure your well-being during
          every gastronomic journey. Support the community and indulge in
          delectable delights—the taste of safety is just a click away.
        </p>
        <div className="flex flex-col md:flex-row justify-around align-middle pt-[3rem] pb-[4rem] gap-16 p-8">
          <img
            src="https://picsum.photos/300/300"
            alt="streetwyze image"
            className="rounded-sm"
            width="300"
            height="300"
          />
          <img
            src="https://picsum.photos/300/300"
            alt="streetwyze image"
            className="rounded-sm"
            width="300"
            height="300"
          />
          <img
            src="https://picsum.photos/300/300"
            alt="streetwyze image"
            className="rounded-sm"
            width="300"
            height="300"
          />
        </div>
      </div>
      <div className="bg-black w-full h-auto text-white p-4">
        <h className="text-[1.2rem] md:text-[2rem] md:pt-8 font-bold p-8">
          Playwyze: Unleash Adventure with Safety
        </h>
        <div className="pt-[3rem] flex flex-col md:flex-row justify-around align-middle p-8">
          <img
            src="https://picsum.photos/500/300"
            alt="streetwyze image"
            className="rounded-sm"
            width="500"
            height="300"
          />
        </div>
        <p className="pt-10 p-5 md:text-lg">
          Discover thrilling activities curated just for you, ensuring
          excitement at every turn. PlayWyze offers a wide range of
          adrenaline-pumping experiences in Cape Town, accompanied by valuable
          safety tips to keep you secure while you explore. Embrace the thrill
          of adventure without compromising on safety. The fun awaits, so let's
          play it safe!
        </p>
        <div className="flex flex-col md:flex-row justify-around align-middle pt-[3rem] pb-[4rem] gap-16 p-8">
          <img
            src="https://picsum.photos/320/300"
            alt="streetwyze image"
            className="rounded-sm"
            width="320"
            height="300"
          />
          <img
            src="https://picsum.photos/320/300"
            alt="streetwyze image"
            className="rounded-sm"
            width="320"
            height="300"
          />
          <img
            src="https://picsum.photos/320/300"
            alt="streetwyze image"
            className="rounded-sm"
            width="320"
            height="300"
          />
        </div>
      </div>
    </>
  );
}

export default OurApp;
