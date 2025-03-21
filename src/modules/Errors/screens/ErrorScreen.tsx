import { ReactNode } from 'react';
import { ChevronLeftIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { To, useNavigate, useRouteError } from 'react-router';

import { goBack } from '@helpers';
import { Button, Heading, Span, Stack } from '@lib';

type TypeErrorScreen = {
	title?: string;
	text?: string;
	icon?: ReactNode;
	to?: To;
};

export const ErrorScreen = ({ title, text, icon, to }: TypeErrorScreen) => {
	const navigate = useNavigate();
	const errorRoute = useRouteError();

	const error = errorRoute as { message?: string };
	const errorMessage = error?.message;

	const handleGoBack = () => navigate(to || goBack());

	return (
		<Stack className="bg-bg-dark container mx-auto flex h-screen items-center justify-center">
			<ExclamationTriangleIcon className="w-32" />
			<Heading level="3" className="block text-center text-5xl font-bold text-white">
				{title || 'Произошла ошибка'}
			</Heading>
			<Span className="mt-5 text-neutral-400">
				{text || errorMessage || 'Мы уже получили отчет и скоро во всём разберёмся'}
			</Span>
			<Button className="mt-12" onClick={handleGoBack}>
				{icon || <ChevronLeftIcon className="w-5" />}
				<Span className="text-white">Вернуться назад</Span>
			</Button>
		</Stack>
	);
};
