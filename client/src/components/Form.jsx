export const Form = () => {
  return <>
  <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd5000000SzDR" method="POST" className="mx-6 my-4 flex flex-col gap-4 rounded-lg bg-white px-4 py-4 shadow-2xl lg:col-span-7">
        <input type="hidden" name="oid" value="00Dd5000000SzDR"/>
        <input type="hidden" name="retURL" value="https://www.dosink.com"/>

        {/* <input type="hidden" name="debug" value="1" />
        <input type="hidden" name="debugEmail" value="shilash@dosink.com" /> */}
      
        <div className="grid gap-4 md:grid-cols-6">
          <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
            <label htmlFor="first_name" className="p-1 lg:w-[20%]">
            First Name:
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="truncate rounded-lg border-2 border-gray-400 p-2 lg:w-[80%]"
              maxLength="40" 
              name="first_name"
            />
          </div>

          <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
            <label htmlFor="last_name" className="p-1 lg:w-[20%]">
            Last Name:
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="truncate rounded-lg border-2 border-gray-400 p-2 lg:w-[80%]"
              maxLength="80" 
              name="last_name"
            />
          </div>

          <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
            <label htmlFor="email" className="p-1 lg:w-[20%]">
              Email:
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="truncate rounded-lg border-2 border-gray-400 p-2 lg:w-[80%]"
              maxLength="80"
              name="email"
            />
          </div>

          <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
            <label htmlFor="company" className="p-1 lg:w-[20%]">
            Company:
            </label>
            <input
              type="text"
              placeholder="Enter your company name"
              className="truncate rounded-lg border-2 border-gray-400 p-2 lg:w-[80%]"
              maxLength="40" 
              name="company"
            />
          </div>

          <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
            <label htmlFor="city" className="p-1 lg:w-[20%]">
            City:
            </label>
            <input
              type="text"
              placeholder="Enter your city name"
              className="truncate rounded-lg border-2 border-gray-400 p-2 lg:w-[80%]"
              maxLength="40" 
              name="city"
            />
          </div>

          <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
            <label htmlFor="mobile" className="p-1 lg:w-[20%]">
            Mobile:
            </label>
            <input
              type="text"
              placeholder="Enter a valid number"
              className="truncate rounded-lg border-2 border-gray-400 p-2 lg:w-[80%]"
              maxLength="40" 
              name="mobile"
            />
          </div>

          <div className="flex w-full flex-col md:col-span-3 lg:col-span-6 lg:flex-row lg:items-start">
            <label htmlFor="title" className="p-1 lg:w-[20%]">
            Title:
            </label>
            <input
              type="text"
              placeholder="Enter your title"
              className="truncate rounded-lg border-2 border-gray-400 p-2 lg:w-[80%]"
              maxLength="40" 
              name="title"
            />
          </div>

        </div>

        <button className="cursor-pointer rounded-lg bg-blue-950 px-3 py-2 text-white hover:bg-gray-500 md:self-start" name="submit">
          Submit
        </button>
      </form>
  </>
}