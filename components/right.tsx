import Experience from "./experience";
import Profile from "./profile";
import Skills from "./skills";

const Right = () => {
  return (
    <div>
      <div className="my-auto ml-5">
        <p className="font-bold md:text-4xl text-3xl">Radmehr</p>
        <p className="font-bold md:text-4xl text-3xl">Dehghani</p>
        <p className="font-normal md:text-lg text-sm mt-2">
          Full-Stack Programmer
        </p>
      </div>

      <div className="mt-[70px] ml-2 md:mt-14">
        <div className="ml-4">
          <Profile />
          <Experience />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Right;
