const Roll = require("react-reveal/Roll");

const Experience = () => {
  return (
    <div>
      <div>
        <div>
          <p className="font-yekanbakhExtbold md:text-lg space-x-1">
            Experience | سابقه
          </p>
        </div>
        <Roll top cascade>
          <div className="w-12 h-1 border-t-2 border-yellow-500 mt-3"></div>

          <div className="font-yekanbakhregular my-5 text-mygray text-sm md:text-base break-words	">
            <div className="flex flex-col md:flex-row md:gap-20 my-2">
              <div>
                <p>2020 - Present</p>
                <p>Nik IT</p>
              </div>
              <div>
                <p className="text-myDarkGray font-yekanbakhbold">
                  Back-End Developer
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-20 my-4">
              <div>
                <p>2021 - Present</p>
                <p>Nik IT</p>
              </div>
              <div>
                <p className="text-myDarkGray font-yekanbakhbold md:ml-1">
                  Front-End Developer
                </p>
              </div>
            </div>
          </div>
        </Roll>
      </div>
    </div>
  );
};

export default Experience;
