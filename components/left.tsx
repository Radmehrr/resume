const Rotate = require("react-reveal/Rotate");
const Slide = require("react-reveal/Slide");
import Image from "next/image";
import Contact from "./contact";
import Education from "./education";
import Resume from "./resume";

const Left = () => {
  return (
    <div>
      <Slide top cascade>
        <div className="md:w-[120px] w-[120px] h-[120px] rounded-full relative">
          <Image
            src="/images/me2.jpg"
            alt="picture of Radmehr Dehghani"
            className="rounded-full border-2 border-yellow-300
          p-[2px] w-full h-full
          top-0 left-0 
          object-cover"
            fill
          />
        </div>
      </Slide>

      <div className="mt-16 ml-1">
        <Education />
        <Contact />
        <Resume />
      </div>
    </div>
  );
};

export default Left;
