const Bounce = require("react-reveal/Bounce");
import Link from "next/link";

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
            <Link
              href={"https://github.com/Radmehrr?tab=repositories"}
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                My Github
              </a>
            </Link>

            {/* simCart bazar backEnd */}
            <Link
              href={"https://simcart-backend.iran.liara.run/api"}
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer" className="my-2">
                Simcart Project Back-End
              </a>
            </Link>

            {/* simCart bazar frontEnd */}
            <Link
              href={"https://simcart.iran.liara.run"}
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer">
                Simcart Project Front-End
              </a>
            </Link>

            {/* Crypto Project */}
            <Link
              href={"https://ethereum.iran.liara.run"}
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer" className="my-2">
                Crypto Blockchain
              </a>
            </Link>

            {/* Chat websocket */}
            <Link href={"https://chatt.iran.liara.run"} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                Chat socket.io
              </a>
            </Link>
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default Resume;
