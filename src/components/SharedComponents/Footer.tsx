import React from "react";

const Footer = () => {
  const SocialIconClass =
    "w-5 h-5 text-gray-500 dark:text-white hover:text-yellow-400 transition-all duration-300 cursor-pointer hover:scale-125";
  return (
    <div className="relative bottom-0 w-full">
      <div className="flex flex-col relative py-10 md:flex-row items-center mt-16 justify-evenly gap-5 bg-gray-300 ">
        <div className="flex flex-col ml-10 items-center">
          <div className="flex gap-5 opacity-50 flex-wrap">
            <p>Terms and Conditions</p>
            <p>Privacy policy</p>
            <p>Call us</p>
          </div>
          <div className="flex gap-4 items-center opacity-60 flex-wrap">
            <img
              src={require("../../img/امازون2-.png")}
              width={"90px"}
              alt=""
            />
            <img
              src={require("../../img/زارا-zara-.png")}
              width={"90px"}
              alt=""
            />
            <img src={require("../../img/شانيلل.png")} width={"60px"} alt="" />
            <img src={require("../../img/غوتشي-.png")} width={"90px"} alt="" />
            <img src={require("../../img/dior-.png")} width={"60px"} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-3 opacity-50">
          <div className="text-sm flex gap-3 items-center">
            <p> Social Media:</p>{" "}
            <div className="flex gap-1">
              <svg
                className={SocialIconClass}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <path d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
              <svg
                className={SocialIconClass}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
              </svg>
              <svg
                className={SocialIconClass}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </div>
          </div>
          <div className="text-sm">Email: aabb@gmail.com</div>
          <div className="text-sm">123321156987</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
