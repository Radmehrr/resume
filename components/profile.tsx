const Slide = require("react-reveal/Slide");

const Profile = () => {
  return (
    <div>
      <Slide top>
        <div>
          <div className="w-10 h-10 rounded-full bg-yellow-400 font-yekanbakhExtbold text-lg relative">
            <p className="ml-4 pt-2">Profile</p>
          </div>
          <div className="w-12 h-1 border-t-2 border-yellow-400 mt-3"></div>

          <div className="font-yekanbakhregular my-5 text-mygray text-sm md:text-base break-words">
            <p>High Educability</p>
            <p>
              Anxious to work with capable people with high work experience and
              gain more experience and a serious moving in the path of personal
              growth
            </p>
            <p>On-Time</p>
            <p>Birth: 1376</p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Profile;
