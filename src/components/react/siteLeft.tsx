import React from "react";
import { Button } from "./button";

interface SiteLeftProps {
  setLink: React.Dispatch<React.SetStateAction<string>>;
}

export function SiteLeft({ setLink }: SiteLeftProps) {
  return (
    <section className="basis-1/4 bg-color-pink p-6 pt-24">
      <h2 className="font-semibold text-5xl leading-[50px] mb-4">
        Share link from one device to another
      </h2>
      <p className="font-medium text-base mb-12">
        Ever been frustrated by the inability to quickly share a link from your
        Pc to your Mac and vice-versa, sendover is here to help.
      </p>
      <Button name="Paste Link" />
    </section>
  );
}
