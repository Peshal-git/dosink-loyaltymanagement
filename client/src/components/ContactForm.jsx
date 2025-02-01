export const ContactForm = () => {
  return (
    <>
      <div className="bg-dosinkcreme lg:max-h-[300px] xl:max-h-[270px] lg:py-10 lg:px-30">
        <div className="grid lg:grid-cols-12">
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
              Check out our FAQ
            </a>
          </div>

          <div className="lg:col-span-1"></div>

          <form className="mx-6 my-4 flex flex-col gap-4 rounded-lg bg-white px-4 py-4 lg:col-span-7 lg:shadow-2xl">
            <div className="grid gap-4 md:grid-cols-6">
              <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
                <label htmlFor="need" className="p-1 lg:w-[40%]">
                  Marketing Technology Solutions:
                </label>
                <input
                  type="text"
                  placeholder="Enter your needs"
                  className="truncate rounded-lg border-2 border-gray-400 p-2 lg:w-[60%]"
                />
              </div>

              <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
                <label htmlFor="email" className="p-1 lg:w-[40%]">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="truncate rounded-lg border-2 border-gray-400 p-2 lg:w-[60%]"
                />
              </div>

              <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
                <label htmlFor="requirements" className="p-1 lg:w-[40%]">
                  Project Requirements:
                </label>
                <textarea
                  type="text"
                  placeholder="Tell us about your team and provide some details about your project."
                  className="min-h-23 w-full overflow-x-hidden overflow-y-auto rounded-lg border-2 border-gray-400 p-2 sm:h-auto lg:w-[60%]"
                ></textarea>
              </div>
            </div>

            <button className="rounded-lg bg-blue-950 px-3 py-2 text-white md:self-start cursor-pointer hover:bg-gray-500">
              Submit your inquiry
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
