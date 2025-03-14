import { createBrowserRouter, RouterProvider } from "react-router";
import { ErrorScreen, NotFoundScreen } from "@modules/Errors";
import { LayoutScreen } from "@modules/Layout";
import { DocsRouter } from "@modules/Docs";

const router = createBrowserRouter([
  {
    Component: LayoutScreen,
    ErrorBoundary: ErrorScreen,
    children: [
      {
        index: true,
        path: "/*",
        Component: DocsRouter,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundScreen,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
