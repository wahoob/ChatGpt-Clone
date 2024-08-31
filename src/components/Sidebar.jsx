import SidebarItem from "./SidebarItem";

import {
  Delete,
  Discord,
  Enlarge,
  Logout,
  Message,
  Plus,
  Sun,
  Expand,
  Edit,
} from "@/utils/icons.util";

const Sidebar = ({ open, setOpen, isSmallScreen }) => {
  const expand = (open && isSmallScreen) || !isSmallScreen;

  const smallScreenOptions = (
    <div className="flex items-center justify-between text-[#C5C5D1] px-[14px] shrink-0 border-b pb-2 border-[#444654]">
      <button onClick={() => setOpen(false)}>
        <div className="size-6">
          <Expand />
        </div>
      </button>
      <button>
        <div className="size-4">
          <Edit />
        </div>
      </button>
    </div>
  );

  const largeScreenOptions = (
    <div className="flex items-center gap-4 h-[45px] px-[17px] border border-[#444654] rounded-md">
      <div className="shrink-0">
        <Plus />
      </div>
      <p className="text-[13.5px] font-medium text-white ">New chat</p>
    </div>
  );

  return (
    <div
      className={`transition-all duration-200 h-full bg-[#202123] max-md:absolute z-50 
      ${expand ? "w-[260px]" : "w-0 invisible"}`}
    >
      <div className="flex flex-col gap-3 h-full p-[9px] overflow-hidden whitespace-nowrap">
        {isSmallScreen ? smallScreenOptions : largeScreenOptions}

        <div className="flex flex-col w-full overflow-y-auto overflow-x-hidden flex-1 text-[#C5C5D1]">
          <SidebarItem
            Icon={Message}
            text="Chatbot definition explaination for a newbie"
          />
        </div>

        <div className="border-t border-[#444654] text-white">
          <SidebarItem
            Icon={Delete}
            text="Clear conversations"
            canChange={false}
          />
          <SidebarItem Icon={Sun} text="Light mode" canChange={false} />
          <SidebarItem Icon={Discord} text="OpenAI Discrod" canChange={false} />
          <SidebarItem Icon={Enlarge} text="Updates & FAQ" canChange={false} />
          <SidebarItem Icon={Logout} text="Log out" canChange={false} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
