import { Suspense } from "react";
import { Outlet } from "react-router";
import { Div } from "@lib";

import DocsASide from "./components/DocsASide";

const DocsLayout = () => (
  <Div className="bg-bg-light dark:bg-bg-dark h-screen w-full">
    <Div className="mx-auto flex h-screen max-w-[90rem] flex-row">
      <DocsASide />

      <Div className="flex flex-10 overflow-hidden">
        <Suspense>
          <Outlet />
        </Suspense>
      </Div>
    </Div>
  </Div>
);

export default DocsLayout;
