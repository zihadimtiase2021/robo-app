const BottomOffer = () => {
  return (
    <section
      id="bottom-offer-section"
      className="px-4 mb-14 max-w-[1536px] mx-auto md:px-16 lg:px-20 lg:mb-20"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="600"
        className="flex flex-col bg-gradient-to-tr from-[#14101D] via-[#14101D] to-[#ffffff4f] rounded-[20px] px-8 py-8 lg:px-24 lg:py-14 lg:flex-row lg:justify-between"
      >
        <div>
          <h1 className="text-[24px] mb-4 font-semibold lg:text-5xl lg:mb-8 lg:leading-[67.2px]">
            Let’s try our service now!
          </h1>
          <p className="text-lg text-textcolor mb-4">
            Everything you need to accept card payments <br />
            and grow your business anywhere on the planet.
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="#"
            className="cursor-pointer bg-gradient-to-tl from-[#35BDD0] via-[#35BDD0] to-white rounded-[10px] text-black text-lg font-[500] px-[30px] py-[15px]"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default BottomOffer;
