import { Route, Routes } from "react-router";
import DocsLayout from "./DocsLayout";
import DocsHomeScreen from "./screens/DocsHomeScreen";
import { NotFoundScreen } from "@modules/Errors";

export const DocsRouter = () => (
  <Routes>
    <Route Component={DocsLayout}>
      <Route index Component={DocsHomeScreen} />
      <Route path="*" element={<NotFoundScreen to="/test" />} />
    </Route>
  </Routes>
);
