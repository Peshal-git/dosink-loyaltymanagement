import { NavLink } from "react-router-dom";

export const HeroContainer = () => {
  return (
    <>
      <div className="grid gap-4 p-4 md:grid-cols-2">
        <div className="flex min-h-[500px] flex-col items-start p-10 lg:justify-between xl:pt-20 pt-10 lg:pr-20 xl:pb-20 lg:pl-25">
          <h1 className="mb-10 text-4xl font-bold">
            Transforming ideas into{" "}
            <span className="text-burntorange"> Digital Reality</span> with our
            expertise
          </h1>

          <p className="mb-10 text-xl font-medium">
            Bringing your vision to life with fresh, forward-thinking ideas and
            services designed to meet your needs. Dedicated to understanding and
            meeting the unique needs of each client, ensuring that the
            technological transformation is tailored to their specific
            requirements.
          </p>

          <NavLink
            to="/our-work"
            className="cursor-pointer rounded-lg bg-blue-950 p-3 text-xl text-amber-50 hover:bg-gray-500"
          >
            Learn More
          </NavLink>
        </div>
        <div className="hidden p-10 md:flex md:items-center md:justify-center lg:p-15">
          <img
            className="max-h-[400px]"
            src="/images/hero-image.png"
            alt="Random image"
          />
        </div>
      </div>
    </>
  );
};
