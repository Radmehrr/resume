const Bounce = require("react-reveal/Bounce");

const Education = () => {
  return (
    <div>
      <Bounce left cascade>
        <div>
          <p className="font-yekanbakhExtbold md:text-lg space-x-1">
            Education | تحصیلات
          </p>
          <div className="w-12 h-1 border-t-2 border-yellow-500 mt-3"></div>
          <div className="font-yekanbakhregular my-5 text-mygray text-sm md:text-base">
            <p>1396 - 1401</p>
            <p>Bachelor of software</p>
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default Education;
