import { features } from "../constants/index";
import Button from "./Button";

const StateSection = () => {
  return (
    <section
      id="features"
      className="start-section mb-14 max-w-[1536px] mx-auto lg:mb-28"
    >
      {/* <!-- row --> */}
      <div className="flex flex-col px-4 gap-16 lg:gap-16 md:px-16 lg:px-20 lg:flex-row">
        {/* <!-- left --> */}
        <div data-aos="fade-up" className="lg:w-1/2">
          <h1 className="font-semibold text-[26px] mb-8 lg:text-5xl lg:leading-[76.8px]">
            You do the business, <br />
            we’ll handle the money.
          </h1>
          <p className="text-lg text-textcolor mb-8">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <div className="mt-16">
            <Button contetnt={"Get Started"} />
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="space-y-4 lg:flex lg:flex-col lg:justify-center lg:w-1/2">
          {features.map(item => {
            const { id, icon, title, content } = item;

            return (
              <div
                key={id}
                data-aos="fade-up"
                className="flex gap-6 items-center bg-gradient-to-tl from-[#14101D] via-[#14101D] to-[#ffffff4f] rounded-[20px] p-4 lg:from-transparent lg:via-transparent lg:to-transparent lg:hover:from-[#14101D] lg:hover:via-[#14101D] lg:hover:to-[#ffffff4f]"
              >
                <div className="">
                  <div className="bg-[#09977C1A] w-[64px] h-[64px] rounded-full flex justify-center items-center">
                    <img src={icon} alt="Star" />
                  </div>
                </div>
                <div className="">
                  <h2 className="text-lg font-semibold mb-2"> {title} </h2>
                  <p className="text-base text-textcolor">{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StateSection;
