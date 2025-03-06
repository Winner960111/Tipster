const Navbar = ({title}) => {
  return (
    <div className="w-full max-w-[768px] flex bg-island items-center px-[5px]">
      <img src="back.png" alt="back_icon" className="w-6 my-[10px] mx-[9px]" />
      <p className="w-full body_medium17 text-white text-center">{title}</p>
    </div>
  );
};
export default Navbar;
