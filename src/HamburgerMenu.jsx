const HamburgerMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <nav className="flex justify-end items-center h-[70px] bg-zinc-700 p-3">
      {/* menu icon */}
      <div
        onClick={(e) => {
          console.log(e.target);
          setActiveMenu(!activeMenu);
        }}
        className="cursor-pointer menu h-[95%] w-[60px] relative z-20"
      >
        <span className={`${activeMenu ? "active" : ""}`}></span>
        <span className={`${activeMenu ? "active" : ""}`}></span>
        <span className={`${activeMenu ? "active" : ""}`}></span>
      </div>
    </nav>
  );
};
export default HamburgerMenu;
