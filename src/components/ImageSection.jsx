import { airbnb, binance, coinbase, dropbox } from "../assets/index";

const ImageSection = () => {
  return (
    <section
      id="image-section"
      className="px-4 mb-14 max-w-[1536px] mx-auto lg:mb-20 md:px-16 lg:px-20"
    >
      <div className="flex items-center flex-col gap-4 lg:flex-row lg:justify-evenly">
        <div data-aos="zoom-in">
          <img className="w-[180px]" src={airbnb} alt="airbnb" />
        </div>
        <div data-aos="zoom-in">
          <img className="w-[180px]" src={binance} alt="binance" />
        </div>
        <div data-aos="zoom-in">
          <img className="w-[180px]" src={coinbase} alt="coinbase" />
        </div>
        <div data-aos="zoom-in">
          <img className="w-[180px]" src={dropbox} alt="dropbox" />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
