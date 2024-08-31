import { Link } from "react-router-dom";
import { GPTLogo, Google, Microsoft, ReCapatcha } from "../../utils/icons.util";

export const Login = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-white">
      <div className="flex flex-col items-center gap-14 w-full">
        <div className="size-[30px]">
          <GPTLogo />
        </div>

        <div className="sm:w-96 w-full px-7">
          <div className="text-[#2E3339] text-[31px] font-bold">
            Welcome back
          </div>

          <form className="mt-6 flex flex-col gap-3">
            <div className="flex flex-col gap-1 relative">
              <input
                type="email"
                name="email"
                id="email"
                className="peer border-[#C3C8CF] border rounded p-4 focus:outline-primary"
              />
              <label
                htmlFor="email"
                className="text-[#6d6e70] peer-focus:text-[#0FA47F] bg-white absolute left-[17px] bottom-4 peer-focus:text-sm peer-focus:bottom-[45px] peer-focus:left-[14px] px-1 py-[3px] transition-all duration-300 cursor-text"
              >
                Email address
              </label>
            </div>
            <div className="rounded border border-[#C3C8CF] pt-[13px] pb-[5px] pl-3 pr-2 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <label htmlFor="confirm" className="relative cursor-pointer">
                  <input
                    type="checkbox"
                    name="confirm"
                    id="confirm"
                    className="peer size-[30px] appearance-none border-2 border-[#C1C1C1] rounded-sm cursor-pointer checked:bg-[#0FA47F] checked:border-[#0FA47F]"
                  />
                  <div className="absolute left-1/2 top-0.5 -translate-x-1/2 w-3 h-5 border-b-[4px] border-r-[4px] border-white rotate-45 hidden peer-checked:block" />
                </label>
                <label
                  htmlFor="confirm"
                  className="text-[15px] font-medium text-[#2E3339] cursor-pointer"
                >
                  I&apos;m not a robot
                </label>
              </div>
              <div className="flex flex-col items-center">
                <ReCapatcha />
                <p className="mt-[7px] text-[10px] font-medium text-[#555555]">
                  reCAPATCHA
                </p>
                <p className="text-[8px] font-medium text-[#555555]">
                  Privacy - Terms
                </p>
              </div>
            </div>
            <button
              type="button"
              className="text-white text-[15px] font-medium bg-primary w-full py-3 px-2 rounded mt-[13px]"
            >
              Continue
            </button>
          </form>

          <div className="text-sm text-[#2E3339] font-medium text-center mt-[14px]">
            Don’t have an account?{" "}
            <Link to="signup" className="text-primary">
              Sign up
            </Link>
          </div>

          <div className="h-[1px] bg-[#C3C8CF] mt-7 relative">
            <span className="text-[#2E3339] text-xs absolute left-1/2 -translate-x-1/2 -top-5 bg-white p-3">
              OR
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-2">
            <button className="flex items-center border border-[#C3C8CF] px-5 py-3 rounded w-full gap-4">
              <Google /> Continue with Google
            </button>
            <button className="flex items-center border border-[#C3C8CF] px-5 py-3 rounded w-full gap-4">
              <Microsoft /> Continue with Microsoft Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
