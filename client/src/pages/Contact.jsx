import { ContactForm } from "../components/ContactForm";

export const Contact = () => {
  return (
    <>
      <div className="relative lg:px-30 lg:py-10">
        <div className="absolute top-0 left-0 h-[350px] w-full bg-dosinkcreme lg:h-[300px] xl:h-[270px]"></div>
        <div className="relative grid lg:grid-cols-12">
          <div className="p-6 lg:col-span-4">
            <h2 className="text-center text-3xl font-semibold lg:text-start">
              Talk with our sales team
            </h2>
            <p className="mt-4 text-center text-black lg:text-start">
              Fill out your information and a DosInk representative will reach
              out to you. Have a simple question?
            </p>
            <a
              href="#"
              className="mt-4 block text-center text-blue-700 underline lg:text-start"
            >
              {" "}
              Check out our FAQ{" "}
            </a>
          </div>

          <div className="lg:col-span-1"></div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};
