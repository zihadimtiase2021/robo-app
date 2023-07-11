import { card } from "../assets/index";
import Button from "./Button";
const CardDill = () => {
  return (
    <section
      id="card-dill-section"
      className="mb-14 max-w-[1536px] mx-auto lg:mb-20"
    >
      <div className="flex flex-col-reverse gap-8 px-4 md:px-16 lg:px-20 lg:flex-row">
        {/* <!-- left --> */}
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center lg:w-1/2"
        >
          <h1 className="font-semibold text-[26px] mb-8 lg:text-5xl lg:leading-[76.8px]">
            Easily control your billing & invoicing.
          </h1>
          <p className="text-lg text-textcolor mb-8">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="mt-8">
            <Button contetnt={"Get Started"} />
          </div>
        </div>
        {/* <!-- right --> */}
        <div data-aos="zoom-in" className="lg:w-1/2">
          <img className="w-full" src={card} alt="bill" />
        </div>
      </div>
    </section>
  );
};

export default CardDill;
