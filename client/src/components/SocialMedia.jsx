import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLine } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <>
      <div className="flex mt-4 justify-start sm:justify-center md:mt-0 space-x-5 items-center">
        <FaFacebook className="text-gray-500 hover:text-black hover:cursor-pointer" />
        <FaInstagram className="text-gray-500 hover:text-black hover:cursor-pointer" />
        <FaYoutube className="text-gray-500 hover:text-black hover:cursor-pointer" />
        <FaWhatsapp className="text-gray-500 hover:text-black hover:cursor-pointer" />
        <FaLine className="text-gray-500 hover:text-black hover:cursor-pointer" />
      </div>
    </>
  );
};
