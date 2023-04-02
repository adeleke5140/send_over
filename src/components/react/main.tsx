import { Nav } from "./nav";
import { SendLink } from "./sendLink";
import { ReceiveLink } from "./receiveLink";
import { SiteLeft } from "./siteLeft";
import { useState } from "react";

export function Main() {
  const [link, setLink] = useState("");

  return (
    <main className="border-t-2 border-color-dark">
      <Nav />
      <div className="flex flex-col md:flex-row">
        <SiteLeft setLink={setLink} />
        <section className="flex-1 flex flex-col md:flex-row gap-8 md:gap-4 bg-color-yellow p-6 pt-10 md:pt-24">
          <SendLink link={link} />
          <ReceiveLink />
        </section>
      </div>
      <footer>
        <p className="text-center mt-1">
          {" "}
          Developed with ❤️ by{" "}
          <a href="https://github.com/adeleke5140">
            <span className="font-medium underline">Kehinde</span>
          </a>
        </p>
      </footer>
    </main>
  );
}
