const Starter = ({ title, Icon, children }) => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="size-[22px] mb-2.5">
        <Icon />
      </div>
      <h3 className="text-[17px] font-medium text-white mb-[21px]">{title}</h3>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default Starter;
