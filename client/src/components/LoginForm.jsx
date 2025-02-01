import { FaGoogle, FaApple } from "react-icons/fa";
export const LoginForm = () => {
  return (
    <>
      <div className="shadow-lg border border-gray-200 rounded-lg my-2 flex w-full flex-col items-start justify-start p-10 md:w-1/2 md:px-10 z-1 bg-white">
        <div>
          <h1 className="mb-2 text-4xl font-extrabold text-black">Log in</h1>
          <p className="text-xs text-gray-950">
            Before we start, please log into your account
          </p>
        </div>

        <form className="my-4 flex w-full flex-col items-start justify-start gap-4">

          <div className="relative z-0 w-full">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-900 focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />

            <label
              htmlFor="floating_email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Email address
            </label>
          </div>

          <div className="group relative z-0 w-full">
            <input
              type="password"
              name="password"
              id="floating_password"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-900 focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />

            <label
              htmlFor="floating_password"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-900 rtl:peer-focus:translate-x-1/4"
            >
              Password
            </label>
          </div>

          <div className="inline-flex w-full items-center justify-end">
            <p className="cursor-pointer text-sm text-black hover:underline">
              Forgot password?
            </p>
          </div>

          <button className="w-full cursor-pointer rounded-lg bg-blue-950 px-3 py-2 text-white hover:bg-gray-500 md:self-start">
            Sign In
          </button>


          <div className="mx-auto my-3 flex w-full max-w-md items-center justify-center gap-4 text-black">
            <hr className="w-full border-[0.1px] border-black" />
            <p className="text-sm">OR</p>
            <hr className="w-full border-[0.1px] border-black" />
          </div>
          <a className="inline-flex w-full items-center justify-center gap-3 border-[1px] hover:bg-gray-400 border-black px-3 py-2 text-center text-black rounded-lg cursor-pointer">
            <FaGoogle />
            Login with Google
          </a>

          <button className="inline-flex w-full items-center justify-center gap-3 border-[1px] hover:bg-gray-400 border-black px-3 py-2 text-center text-black rounded-lg cursor-pointer">
            <FaApple />
            Login with Apple
          </button>

          <p className="my-2 text-sm font-light text-black">
            Don&#x27;t have an account?{" "}
            <span className="cursor-pointer font-bold hover:underline">
              Create an account
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
