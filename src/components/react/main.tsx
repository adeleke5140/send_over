import { Nav } from "./nav";
import { SendLink } from "./sendLink";
import { ReceiveLink } from "./receiveLink";
import { SiteLeft } from "./siteLeft";
import { useState } from "react";

export function Main() {
  const [link, setLink] = useState("");

  return (
    <main className="h-full border-t-2 border-color-dark">
      <Nav />
      <div className="flex w-full h-full">
        <SiteLeft setLink={setLink} />
        <section className="flex-1 flex gap-4 bg-color-yellow p-6 pt-24">
          <SendLink link={link} />
          <ReceiveLink />
        </section>
      </div>
    </main>
  );
}
