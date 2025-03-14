import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { goBack } from "@helpers";
import { To, useNavigate } from "react-router";
import { Button, Heading, Stack, Span } from "@lib";

export const NotFoundScreen = ({ to }: { to?: To }) => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(to || goBack());

  return (
    <Stack className="container mx-auto flex h-screen items-center justify-center">
      <Heading level="1" className="block text-9xl font-bold text-white">
        404
      </Heading>
      <Span className="mt-3 text-neutral-400">Страница не найдена</Span>
      <Button className="mt-5" onClick={handleGoBack}>
        <ChevronLeftIcon className="w-5" />
        <Span>Вернуться назад</Span>
      </Button>
    </Stack>
  );
};
