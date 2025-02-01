import { FaStar } from "react-icons/fa";
import { LoginForm } from "../components/LoginForm";
export const Login = () => {
  return (
    <>
      <div className="relative mx-auto flex w-full items-stretch justify-between xl:gap-25 md:gap-10 p-10 xl:px-40 xl:py-10">
      <div className="absolute top-0 left-0 h-[350px] w-full bg-dosinkcreme md:h-[470px] xl:h-[450px] z-0"></div>
        <div className="relative space-y-4 hidden md:flex md:flex-col md:w-1/2 md:justify-start md:items-start py-10">
    
            
            <div className="grid grid-cols-10 items-center gap-2">
                <FaStar className="text-3xl text-star col-span-1" />
                <h3 className="text-3xl font-bold text-gray-900 col-span-9">
                    Digital Campaigns
                </h3>
                <div className="col-span-1"></div>
                <p className="text-gray-600 col-span-9">
                    Engage your audience through innovative digital strategies crafted to elevate your brand presence and effectiveness.
                </p>
            </div>

            <div className="grid grid-cols-10 items-center gap-2">
                <FaStar className="text-3xl text-star col-span-1" />
                <h3 className="text-3xl font-bold text-gray-900 col-span-9">
                    Tech Solutions
                </h3>
                <div className="col-span-1"></div>
                <p className="text-gray-600 col-span-9">
                    Levarage cutting-edge technology services that drive efficiency and enhance operational capabilities for your business.
                </p>
            </div>

            <div className="grid grid-cols-10 items-center gap-2">
                <FaStar className="text-3xl text-star col-span-1" />
                <h3 className="text-3xl font-bold text-gray-900 col-span-9">
                    CRM Solutions
                </h3>
                <div className="col-span-1"></div>
                <p className="text-gray-600 col-span-9">
                    Maximize customer relationships with our tailored CRM strategies that foster engagement and satisfaction.
                </p>
            </div>
        </div>

        <LoginForm />

      </div>
    </>
  );
};
