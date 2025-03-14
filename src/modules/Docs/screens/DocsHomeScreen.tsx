import { Link } from "@modules/Elements";
import { cn, HStack, Stack, Span } from "@lib";
import { GIT_REPO_URL } from "@constants";

const DocsHomeScreen = () => (
  <Stack className="w-full overflow-x-hidden overflow-y-auto p-12 md:pb-24">
    <Brand />
    <Buttons />
  </Stack>
);

export default DocsHomeScreen;

const Brand = () => (
  <Stack>
    <Span className="!text-primary text-6xl font-bold">megatizerui 🚀</Span>
    <Span className="!text-muted-light dark:!text-muted-dark mt-4 text-xl font-medium">
      library of components of the{" "}
      <Link to="https://megatizer.ru/" target="_blank" className="!text-primary hover:underline">
        megatizer.ru
      </Link>
    </Span>
  </Stack>
);

const Buttons = () => (
  <HStack className="mt-8 gap-x-3">
    <Link
      to="/"
      //   to={getFirstComponentUrl()}
      className={cn(
        "rounded-full px-5 pt-2.5 pb-3 font-semibold !text-white hover:!no-underline dark:!text-white",
        "!bg-primary hover:!bg-blue-500"
      )}
    >
      Get started
    </Link>
    <Link
      to={GIT_REPO_URL}
      target="_blank"
      className={cn(
        "rounded-full px-5 pt-2.5 pb-3 font-semibold !text-white hover:!no-underline dark:!text-white",
        "!bg-muted hover:!bg-muted/80"
      )}
    >
      View on GitHub
    </Link>
  </HStack>
);

// const getFirstComponentUrl = (): string => {
//   if (docsCategories[1]?.items) {
//     return `${docsCategories[0]?.url}/${docsCategories[1]?.url}/${docsCategories[1]?.items[0]?.url}`;
//   }

//   return "/test";
// };
