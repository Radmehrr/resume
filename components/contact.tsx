const Bounce = require("react-reveal/Bounce");

const Contact = () => {
  return (
    <div>
      <Bounce left cascade>
        <div>
          <p className="font-yekanbakhExtbold md:text-lg">Contact | تماس</p>
          <div className="w-12 h-1 border-t-2 border-yellow-500 mt-3"></div>

          <div className="my-4 text-mygray text-sm md:text-base">
            <p>Phone</p>
            <p>+98 917 2562637</p>
          </div>

          <div className="my-4 text-mygray break-words text-sm md:text-base">
            <p>Email</p>
            <p>Radmehr.co.pro@gmail.com</p>
          </div>

          <div className="my-4 text-mygray text-sm md:text-base">
            <p>Address</p>
            <p>Fars/Shiraz, 073</p>
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default Contact;
