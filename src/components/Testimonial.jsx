import { feedback } from "../constants/index";

const Testimonial = () => {
  return (
    <section
      id="clients"
      className="testimonial-section mb-14 px-4 mt-16 max-w-[1536px] mx-auto md:px-16 lg:px-20 lg:mb-20"
    >
      {/* <!-- title row --> */}
      <div className="flex flex-col mb-8 lg:mb-16 lg:flex-row">
        <div data-aos="fade-up" className="lg:w-1/2">
          <h1 className="font-semibold text-[26px] mb-8 lg:text-5xl lg:leading-[81.6px]">
            What people are <br />
            saying about us
          </h1>
        </div>
        <div className="flex items-center lg:w-1/2">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-textcolor"
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      {/* <!-- testimonial-card --> */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* <!-- card --> */}

        {feedback.map(item => {
          const { id, content, name, title, img, icon, delay } = item;
          return (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={delay}
              data-aos-offset="600"
              className="p-8 bg-gradient-to-tl from-[#14101D] via-[#14101D] to-[#ffffff4f] rounded-[20px] flex flex-col justify-evenly lg:from-transparent lg:via-transparent lg:to-transparent lg:hover:from-[#14101D] lg:hover:via-[#14101D] lg:hover:to-[#ffffff4f] lg:h-[395px] lg:p-12 lg:w-1/3"
            >
              <div className="mb-8">
                <img className="w-[42px]" src={icon} alt="quotes" />
              </div>
              <p className="text-textcolor text-lg mb-8">{content}</p>
              <div className="flex gap-4 items-center">
                <img className="w-12 h-12" src={img} alt="people" />
                <div>
                  <p className="text-[20px]"> {name} </p>
                  <p className="text-base text-textcolor">{title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
