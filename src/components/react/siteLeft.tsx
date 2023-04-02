// import React from "react";
import { Button } from "./button";

interface SiteLeftProps {
  setLink: React.Dispatch<React.SetStateAction<string>>;
}

export function SiteLeft({ setLink }: SiteLeftProps) {
  const handleClick = async () => {
    const link = await navigator.clipboard.readText();

    if (link.startsWith("http")) setLink(link);
  };
  return (
    <section className="basis-1/4 bg-color-pink p-6 pt-12 md:pt-24">
      <h2 className="font-semibold text-4xl md:text-5xl md:leading-[50px] mb-4">
        Share link from one device to another
      </h2>
      <p className="font-medium font-sans text-base mb-12">
        Share links from one platform to another over the web.
      </p>
      <Button name="Paste Link" callback={handleClick} />
    </section>
  );
}
