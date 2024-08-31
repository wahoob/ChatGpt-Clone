import Sidebar from "@/components/Sidebar";
import { Sun, Flash, Send, Warning, Expand } from "@/utils/icons.util";
import { useEffect, useState } from "react";
import Starter from "@/components/Starter";
import Description from "@/components/Description";
import Message from "@/components/Message";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const [input, setInput] = useState("What is a Chatbot?");
  const [start, setStart] = useState(false); //temp way to show chat.

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAction = () => setOpen((prev) => !prev);

  const sidebarToggle = (
    <div className="absolute top-1">
      <button className="mx-3 my-2" onClick={toggleAction}>
        <div className="size-8 text-white">
          <Expand />
        </div>
      </button>
    </div>
  );

  const overlay = (
    <div
      className="fixed inset-0 bg-black opacity-60 z-10"
      onClick={() => setOpen(false)}
    />
  );

  const changeInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "What is a Chatbot?") {
      setStart(true);
    }
    setInput("");
  };

  const content = start ? (
    <div className="max-md:mt-10 overflow-y-auto">
      <Message text="What is a Chatbot?" sender />
      <Message text="A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce." />
    </div>
  ) : (
    <div className="mt-14 px-4 lg:pr-7">
      <h1 className="text-[34px] font-medium text-center text-white mb-[4.3rem]">
        ChatGPT
      </h1>

      <div className="grid grid-cols-3 gap-[14px] lg:w-[70%] mx-auto max-sm:hidden">
        <Starter Icon={Sun} title="Examples">
          <Description text="“Explain quantum computing in simple terms” →" />
          <Description text="“Got any creative ideas for a 10 year old’s birthday?” →" />
          <Description text="“How do I make an HTTP request in Javascript?” →" />
        </Starter>
        <Starter Icon={Flash} title="Capabilities">
          <Description text="Remembers what user said earlier in the conversation" />
          <Description text="Allows user to provide follow-up corrections" />
          <Description text="Trained to decline inappropriate requests" />
        </Starter>
        <Starter Icon={Warning} title="Limitations">
          <Description text="May occasionally generate incorrent information" />
          <Description text="May occasionally produce harmful instructions or biased content" />
          <Description text="Limited knowledge of world and events after 2021" />
        </Starter>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex">
      <Sidebar open={open} setOpen={setOpen} isSmallScreen={isSmallScreen} />
      {open && isSmallScreen ? overlay : ""}

      <div className="flex-1 relative">
        {isSmallScreen && sidebarToggle}

        <div
          className={`mx-auto ${!start && "max-w-5xl"} flex flex-col h-full`}
        >
          {content}

          <div className="mt-auto lg:pb-6 px-4 lg:pr-7">
            <form
              className="relative rounded mb-2 overflow-hidden border border-[#303139] max-w-3xl md:w-5/6 mx-auto"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Type 'What is a Chatbot?'"
                className="w-full h-full bg-[#40414E] outline-0 px-4 py-[14.5px] placeholder:text-[#6D6E70] text-white"
                value={input}
                onChange={changeInput}
              />
              <button
                type="submit"
                className="absolute top-1/2 -translate-y-1/2 right-4"
              >
                <Send />
              </button>
            </form>
            <p className="text-xs font-normal text-[#9A9B9F] text-center">
              <span className="underline">ChatGPT Jan 9 Version.</span> Free
              Research Preview. Our goal is to make AI systems more natural and
              safe to interact with. Your feedback will help us improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
