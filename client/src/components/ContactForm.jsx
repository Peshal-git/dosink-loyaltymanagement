export const ContactForm = () => {
  return (
    <>
      <form className="mx-6 my-4 flex flex-col gap-4 rounded-lg bg-white px-4 py-4 shadow-2xl lg:col-span-7">    
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

        <button className="cursor-pointer rounded-lg bg-blue-950 px-3 py-2 text-white hover:bg-gray-500 md:self-start">
          Submit your inquiry
        </button>
      </form>
    </>
  );
};


