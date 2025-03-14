import { Link, ThemeWidgetSwitch } from "@modules/Elements";
import { Divider, Stack } from "@lib";

const DocsASide = () => (
  <Stack className="relitive flex-2 overflow-y-auto border-r border-r-neutral-300 dark:border-r-neutral-700">
    <Stack className="card-bg-light dark:card-bg-dark sticky top-0 mt-6 min-h-12 justify-between px-8">
      <Link to="/test" className="text-primary font-bold">
        megatizerui 🚀
      </Link>
      <Divider />
    </Stack>

    <Stack className="card-bg-light dark:card-bg-dark min-h-12 min-w-max justify-start px-8">
      <Divider className="pb-3" />
      <ThemeWidgetSwitch />
    </Stack>
  </Stack>
);

export default DocsASide;
