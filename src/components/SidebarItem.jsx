import { useNavigate } from "react-router-dom";
import { Delete, Edit } from "@/utils/icons.util";

const SidebarItem = ({ canChange = true, Icon, text }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group hover:bg-[#343540] rounded-md flex items-center py-[13px] px-[14px] relative w-full"
      onClick={() => navigate()}
    >
      <div className="flex items-center gap-[15px] w-full ">
        <div className="shrink-0 size-4">
          <Icon />
        </div>

        <div className="relative w-full overflow-hidden">
          <p className="text-[#ECECF1] text-[13.5px] font-medium whitespace-nowrap w-full">
            {text}
          </p>
          <div className="absolute h-full w-8 top-0 -right-0 bg-gradient-to-l from-[#202123] from-50% to-transparent group-hover:from-[#343540]" />
        </div>
      </div>

      {canChange && (
        <div className="flex gap-[13px] absolute top-1/2 -translate-y-1/2 right-0 invisible group-hover:visible bg-[#343540] py-0.5 pl-[6px] pr-[10px]">
          <div className="size-[14px]">
            <Edit />
          </div>
          <Delete />
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
