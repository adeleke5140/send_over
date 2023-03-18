export const GridTop = () => {
  return (
    <>
      <p className="p-6 border-r-2 border-b-2 border-color-dark font-medium text-base">
        send to: <span className="pl-4 text-[32px] font-semibold">Windows</span>
      </p>
      <p className="p-6 border-r-2 border-b-2 border-color-dark font-medium text-base">
        Network: <span className="pl-4 text-[32px] font-semibold">Wifi</span>
      </p>
      <p className="p-6 border-b-2 border-color-dark font-medium text-base">
        Current Device:{" "}
        <span className="uppercase pl-4 text-[32px] font-semibold">MacOS</span>
      </p>
    </>
  );
};
