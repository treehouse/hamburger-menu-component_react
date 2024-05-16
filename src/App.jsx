import HamburgerMenu from "./HamburgerMenu";
import OffscreenMenu from "./OffscreenMenu";

import { useState } from "react";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="grid place-items-center bg-zinc-800 h-screen w-full">
      <div className="relative bg-zinc-200 h-[75vh] w-[400px] rounded-2xl overflow-hidden">
        <HamburgerMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <OffscreenMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </div>
  );
};
export default App;
