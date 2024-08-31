import { Person, Like, DisLike, GPTLogo } from "@/utils/icons.util";

const Message = ({ text, sender }) => {
  const icon = sender ? (
    <div className="w-[18px] h-auto">
      <Person />
    </div>
  ) : (
    <div className="size-[22px]">
      <GPTLogo />
    </div>
  );

  return (
    <div className="group w-full py-[21px] hover:bg-[#444654] border border-transparent hover:border-[#32343A]">
      <div className="flex items-start gap-[26px] md:px-16 px-4 max-w-4xl mx-auto">
        <div
          className={`${
            sender ? "bg-[#5536DA]" : "bg-[#0FA47F]"
          } rounded size-[30px] flex items-center justify-center`}
        >
          <div className=" text-white">{icon}</div>
        </div>
        <div className="flex-1 mr-[11px]">
          <p className="text-[15px] font-medium text-white leading-[27px]">
            {text}
          </p>
        </div>
        <div className="flex gap-[14px] invisible group-hover:visible [&>*]:cursor-pointer">
          <Like />
          <DisLike />
        </div>
      </div>
    </div>
  );
};

export default Message;
