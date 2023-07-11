import { logo } from "../assets/index";
import { footerLinks, socialMedia } from "../constants/index";

const Footer = () => {
  return (
    <section
      id="footer"
      className="bg-[#06080D] px-4 pt-10 max-w-[1536px] mx-auto lg:pt-20 md:px-16 lg:px-20"
    >
      {/* <!-- sub-footer --> */}
      <div id="sub-footer" className="flex flex-col gap-4 md:flex-row">
        {/* <!-- main --> */}
        <div data-aos="fade-up" className="lg:w-2/5">
          <img className="mb-4 lg:mb-8" src={logo} alt="logo" />
          <p className="text-lg text-textcolor md:pl-7">
            A new way to make the payments <br />
            easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-col gap-6 pb-8 text-center md:text-left md:flex-row lg:w-3/5">
          {footerLinks.map((item, index) => (
            <div key={index} className="lg:w-1/3">
              <h1 className="mb-2 lg:mb-5 text-lg font-semibold">
                {item.title}
              </h1>
              <ul className="space-y-3 text-base text-textcolor">
                {item.links.map(links => (
                  <li key={links.name} data-aos="fade-up">
                    <a href={links.link}>{links.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- sub-footer end --> */}
      {/* <!-- footer sopyright--> */}
      <div className="mx-6 py-4 flex flex-col border-t border-textcolor gap-4 text-center items-center lg:text-left lg:items-start lg:flex-row lg:justify-between">
        <div>
          <p className="text-textcolor text-lg">
            Copyright Ⓒ 2022 Zihad. Developed by WEB BANAI.
          </p>
        </div>
        <div>
          <ul className="flex text-[21px] space-x-4">
            {socialMedia.map(item => {
              const { id, icon, link } = item;
              return (
                <li key={id}>
                  <a href={link}>
                    <img src={icon} alt="icon" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <!-- footer sopyright end--> */}
    </section>
  );
};

export default Footer;
