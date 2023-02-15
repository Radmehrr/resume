import Left from "@/components/left";
import Right from "@/components/right";
import Lottie from "react-lottie";
import { heartLottieStyle, heartOptions } from "../utils/lottie";

export default function Home() {
  return (
    <div>
      <div className="flex max-w-5xl md:mx-auto rounded-lg shadow-2xl bg-white mx-2 bakhMedium my-4">
        <div className="ml-2 py-6 w-2/5">
          <Left />
        </div>

        <div className="w-3/5 ml-2 py-6">
          <Right />
        </div>
      </div>
      <div className="w-full">
        <div className="flex w-[300px] my-2 text-center justify-center mx-auto text-sm">
          <p>made with</p>
          <div className="w-[25px] h-[25px]">
            <Lottie options={heartOptions} style={heartLottieStyle} />
          </div>
          <div className="flex space-x-1 ml-1">
            <p
              className="font-yekanbakhbold text-gray-700"
              style={{ textShadow: "2px 2px 8px #808080" }}
            >
              Nextjs
            </p>
            <span> & </span>
            <p
              className="font-yekanbakhbold text-gray-700"
              style={{ textShadow: "2px 2px 8px #808080" }}
            >
              tailwind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
