const OffscreenMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div
      style={{ right: activeMenu ? "0px" : "-320px" }}
      className="absolute grid place-items-center h-full bg-zinc-500 top-0 w-[320px] duration-200 z-10"
    >
      <ul className="text-center text-xl text-white">
        <li>home</li>
        <li>products</li>
        <li>contact</li>
      </ul>
    </div>
  );
};
export default OffscreenMenu;
