import Lottie from "react-lottie";
import Image from "next/image";
import {
  javaScriptOptions,
  JavaSctiptLottieStyle,
  nodeJsLottieStyle,
  nodeJsOptions,
  mongodbLottieStyle,
  mongodbOptions,
  reactJsLottieStyle,
  reactJsOptions,
  nextJsLottieStyle,
  nextJsOptions,
  solidityOptions,
  solidityLottieStyle,
} from "../utils/lottie";

const Skills = () => {
  return (
    <div>
      <div>
        <p className="font-yekanbakhExtbold md:text-lg space-x-1">
          Skills | مهارت ها
        </p>
        <div className="w-12 h-1 border-t-2 border-yellow-500 mt-3"></div>

        <div className="flex my-3">
          <div className="w-[25px] h-[25px] mr-3">
            <Lottie options={javaScriptOptions} style={JavaSctiptLottieStyle} />
            <Lottie options={nodeJsOptions} style={nodeJsLottieStyle} />
            <Image
              src={"/images/nestjs.png"}
              height={25}
              width={25}
              alt={"nestjs"}
            />
            <Lottie options={mongodbOptions} style={mongodbLottieStyle} />
            <Lottie options={reactJsOptions} style={reactJsLottieStyle} />
            <Lottie options={nextJsOptions} style={nextJsLottieStyle} />
            <Lottie options={solidityOptions} style={solidityLottieStyle} />
          </div>
          <div className="w-1/2 md:w-1/4 font-yekanbakhsemibold space-y-3 text-myDarkGray">
            <p>JavaScript</p>
            <p className="pt-1">NodeJs</p>
            <p className="pt-1">NestJs</p>
            <p>MongoDB</p>
            <p>ReactJs</p>
            <p>NextJs</p>
            <p>Solidity</p>
          </div>
          <div className="md:space-y-5 space-y-6 hidden md:inline">
            {/* javascript rate */}
            <div className="w-1/2 md:w-3/4 flex gap-2 mx-4 my-1">
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
            </div>

            {/* NodeJs rate */}
            <div className="w-1/2 md:w-3/4 flex gap-2 mx-4 my-1">
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
            </div>

            {/* NestJs rate */}
            <div className="w-1/2 md:w-3/4 flex gap-2 mx-4 my-1">
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
            </div>

            {/* MongoDB rate */}
            <div className="w-1/2 md:w-3/4 flex gap-2 mx-4 my-1">
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
            </div>

            {/* ReactJs rate */}
            <div className="w-1/2 md:w-3/4 flex gap-2 mx-4 my-1">
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
            </div>

            {/* NextJs rate */}
            <div className="w-1/2 md:w-3/4 flex gap-2 mx-4 my-1">
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
            </div>

            {/* Solidity rate */}
            <div className="w-1/2 md:w-3/4 flex gap-2 mx-4 my-1">
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
              <div className="w-5 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* mobile devices */}
          <div className="md:hidden">
            {/* javaScript */}
            <div className="flex">
              <p
                className="text-yellow-400 font-bold text-xl -mt-1"
                style={{ textShadow: "3px 3px 7px #FFFF00" }}
              >
                3
              </p>
              <span>/</span>
              <p className="font-light text-sm mt-1">4</p>
            </div>

            {/* nodejs */}
            <div className="flex mt-2">
              <p
                className="text-yellow-400 font-bold text-xl -mt-1"
                style={{ textShadow: "3px 3px 7px #FFFF00" }}
              >
                2
              </p>
              <span>/</span>
              <p className="font-light text-sm mt-1">4</p>
            </div>

            {/* nestjs */}
            <div className="flex mt-3">
              <p
                className="text-yellow-400 font-bold text-xl -mt-1"
                style={{ textShadow: "3px 3px 7px #FFFF00" }}
              >
                3
              </p>
              <span>/</span>
              <p className="font-light text-sm mt-1">4</p>
            </div>

            {/* mongodb */}
            <div className="flex mt-3">
              <p
                className="text-yellow-400 font-bold text-xl -mt-1"
                style={{ textShadow: "3px 3px 7px #FFFF00" }}
              >
                3
              </p>
              <span>/</span>
              <p className="font-light text-sm mt-1">4</p>
            </div>

            {/* reactjs */}
            <div className="flex mt-3">
              <p
                className="text-yellow-400 font-bold text-xl -mt-1"
                style={{ textShadow: "3px 3px 7px #FFFF00" }}
              >
                3
              </p>
              <span>/</span>
              <p className="font-light text-sm mt-1">4</p>
            </div>

            {/* nextjs */}
            <div className="flex mt-3">
              <p
                className="text-yellow-400 font-bold text-xl -mt-1"
                style={{ textShadow: "3px 3px 7px #FFFF00" }}
              >
                2
              </p>
              <span>/</span>
              <p className="font-light text-sm mt-1">4</p>
            </div>

            {/* solidity */}
            <div className="flex mt-3">
              <p
                className="text-yellow-400 font-bold text-xl -mt-1"
                style={{ textShadow: "3px 3px 7px #FFFF00" }}
              >
                2
              </p>
              <span>/</span>
              <p className="font-light text-sm mt-1">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
