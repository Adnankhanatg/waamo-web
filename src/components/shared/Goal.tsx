import Button from "./Button";

const Goal = () => {
  return (
    <section className="flex justify-between md:mt-40 gap-8 items-center max-md:pt-[80px] max-sm:pt-[40px] mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 ">
      {/* h1 and p */}
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">
          Goal of Waamo Relief <br /> Nonprofit
        </h1>
        <p>
          The goal of Waamo nonprofit is to support local community through
          charitable, educational and advocacy efforts.
          <br /> Our objective is also is also to pursue a social mission that
          benefits our community as a whole.
        </p>
        <a href="/">
          <Button label="Read More" />
        </a>
      </div>

      <div className="w-[100%] rounded-md max-md:hidden ">
        <img
          className="rounded-lg"
          src="/assets/images/Kids-helping-kids-1-1.webp"
          alt="kids"
        />
      </div>
    </section>
  );
};

export default Goal;
