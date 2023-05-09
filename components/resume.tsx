const Bounce = require("react-reveal/Bounce");
import Link from "next/link";
import { Data } from "@/constant/resume";

const Resume = () => {
  return (
    <div>
      <Bounce left cascade>
        <div>
          <p className="font-yekanbakhExtbold md:text-lg space-x-1">
            Resume | کارنامه
          </p>
          <div className="w-12 h-1 border-t-2 border-yellow-500 mt-3"></div>
          <div className="font-yekanbakhregular my-5 text-mygray text-sm md:text-base flex flex-col">
            {Data.map((resume: any) => (
              <Link key={resume.id} href={resume.link} passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 underline"
                >
                  {resume.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default Resume;
