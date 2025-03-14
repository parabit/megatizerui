import { useTheme } from "@hooks";
import { Suspense } from "react";
import { Outlet } from "react-router";

export const LayoutScreen = () => {
  useTheme();

  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};
