import { useEffect } from "react";

export const GridTop = () => {
  useEffect(() => {
    const navigatorEl = navigator;
    console.log(navigatorEl);
  }, []);
  return (
    <section className="flex justify-between border-b-2 border-color-dark">
      <p className="p-6 border-l-2 border-r-2 border-color-dark font-medium text-base hover:bg-color-pink cursor-pointer">
        User:
        <span className="pl-4 text-[32px] font-semibold">Not Logged In</span>
      </p>
      <p className="p-6 border-l-2 border-r-2 border-color-dark font-medium text-base hover:bg-color-yellow cursor-pointer">
        <span className="uppercase pl-4 text-[32px] font-semibold">
          {" "}
          Get Access
        </span>
      </p>
    </section>
  );
};
