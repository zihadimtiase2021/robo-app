import { discount, getStart, robot } from "../assets/index";
import { stats } from "../constants/index";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="mb-16 max-w-[1536px] mx-auto mt-[70px] lg:mb-20"
    >
      {/* <!-- row --> */}
      <div className="flex flex-col-reverse mb-8 lg:flex-row">
        {/* <!--left text --> */}
        {/* <!-- discount --> */}
        <div
          data-aos="fade-up"
          className="  px-4 flex flex-col justify-center relative items-center mt-8 lg:mt-0 lg:items-start md:pl-16 lg:pl-20 lg:w-1/2"
        >
          <div className="inline-flex flex-row items-center justify-center gap-2 bg-gradient-to-b from-[#201F24] py-1 px-4 rounded-lg mb-8">
            <img src={discount} alt="distinctio" className="w-8 h-8" />
            <p className="uppercase text-textcolor text-[13px] lg:text-lg">
              20% Discount for <span className="text-white">1 month</span>{" "}
              account
            </p>
          </div>
          <h1 className="font-semibold text-[2.2rem] leading-[48px!important] mb-4 w-full lg:mb-8 lg:leading-[90px!important] xl:text-[4rem]">
            The Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#33BBCF] to-white">
              Generation{" "}
            </span>
            <br />
            Payment Method.
          </h1>
          <p className="text-lg text-textcolor">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          {/* <!-- absulut-image --> */}
          <div className="absolute top-[70px] right-0 md:right-[351px] md:top-[72px] lg:top-[188px] lg:right-[99px]">
            <img
              src={getStart}
              alt="get get-start"
              className="w-[70%] lg:w-full lg:h-full"
            />
          </div>
        </div>
        {/* <!--right image --> */}
        <div className="flex justify-end relative lg:w-1/2">
          <img data-aos="zoom-in" src={robot} alt="robot" className="w-[90%]" />
          {/* <!-- absulute --> */}
          <div className="absolute w-[405px] h-[471px] rounded-full bg-[#b6dbf66b] blur-[117px] -z-[1] right-0 -top-[70px] lg:top-0 lg:right-[120px]"></div>
        </div>
      </div>
      {/* <!-- counter row --> */}

      <div className="flex flex-col items-center px-4 lg:flex-row md:px-16 lg:px-20">
        {stats.map(item => (
          <div
            key={item.id}
            data-aos="zoom-in"
            className="flex items-center justify-center flex-col mb-4 lg:mb-0 lg:gap-4 lg:flex-row lg:w-1/3"
          >
            <h1 className="font-bold text-[40px]"> {item.value} </h1>
            <p className="uppercase bg-gradient-to-tl from-white to-[#00D3DB] text text-transparent bg-clip-text text-lg">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
