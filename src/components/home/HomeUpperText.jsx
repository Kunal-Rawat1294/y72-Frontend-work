import React from "react";
import Video from "./Video";
import HomeUpperTextVideo from "./HomeUpperTextVideo";

const HomeUpperText = () => {
  return (
    <div className="text-white-400 font-[font1]">
      <div className="uppercase flex justify-center items-center leading-[11vw] text-[11vw] lg:leading-[9vw] lg:text-[9.5vw]">
        L'étincelle
      </div>
      <div className="uppercase flex justify-center items-start leading-[11vw] text-[11vw] lg:leading-[9vw] lg:text-[9.5vw]">
        <div>qui</div>
        <div className="relative h-[7vw] w-[14vw] rounded-full overflow-hidden">
          <HomeUpperTextVideo />
        </div>


        <div> génère</div>
      </div>
      <div className="uppercase flex justify-center items-center leading-[11vw] text-[11vw] lg:leading-[6vw] lg:text-[9.5vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeUpperText;
