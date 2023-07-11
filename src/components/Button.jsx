/* eslint-disable react/prop-types */
const Button = ({ contetnt }) => {
  return (
    <a
      href="#"
      className="cursor-pointer bg-gradient-to-tl from-[#35BDD0] via-[#35BDD0] to-white rounded-[10px] text-black text-lg font-[500] px-[30px] py-[15px]"
    >
      {contetnt}
    </a>
  );
};

export default Button;
