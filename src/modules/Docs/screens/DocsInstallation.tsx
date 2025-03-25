import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import Markdown from 'react-markdown';

import { Button, Card, Div, Heading, HStack, Span, Stack, Tabs } from '@lib';
import { CodeBlock } from '@modules/Elements';

import DocsHeader from '../components/DocsHeader';
import DocsPagination from '../components/DocsPagination';

interface IDocsInstallation {
	nextPage?: {
		url: string;
		title: string;
	};
}

export const DocsInstallation = (props: IDocsInstallation) => {
	const [index, setIndex] = useState(0);

	const npm = 'npm i @parabit/megatizerui';
	const yarn = 'yarn add @parabit/megatizerui';
	const css = `@import 'tailwindcss';\n\n@import '@parabit/megatizerui/dist/index.css';`;

	const [copyNPM, setCopyNPM] = useState(false);
	const [copyYarn, setCopyYarn] = useState(false);
	const [copyCSS, setCopyCSS] = useState(false);

	const handleChangeIndex = (value: number) => setIndex(value);

	const handlecopyNPM = () => {
		navigator.clipboard.writeText(npm);
		setCopyNPM(true);
	};

	const handlecopyYarn = () => {
		navigator.clipboard.writeText(yarn);
		setCopyYarn(true);
	};

	const handlecopyCSS = () => {
		navigator.clipboard.writeText(css);
		setCopyCSS(true);
	};

	return (
		<Stack className="w-full overflow-hidden p-4 sm:pl-12 sm:pt-8 pb-24 md:pr-24">
			<DocsHeader
				title="Installation"
				description="Настройте библиотеку `megatizerui` для вашего проекта"
			/>

			<Stack className="mt-6">
				<Heading level="4" className="font-semibold mb-2" text="Быстрая установка" />

				<Div className="leading-8 text-muted">
					<Markdown>
						Это руководство поможет вам начать работу с библиотекой, включая инструкцию по
						запуску и интеграции в ваш проект
					</Markdown>
				</Div>
			</Stack>

			<Stack className="mt-8">
				<Heading level="4" className="font-semibold mb-2" text="Первый шаг" />

				<Div className="leading-8 text-muted">
					<Markdown>Установите `megatizerui` через `npm` или `yarn`</Markdown>
				</Div>

				<Tabs className="mt-6">
					<Tabs.TabList index={index} onChange={handleChangeIndex} className="w-full md:w-fit">
						<Tabs.Tab>npm</Tabs.Tab>
						<Tabs.Tab>yarn</Tabs.Tab>
					</Tabs.TabList>

					<Tabs.PanelList index={index}>
						<Tabs.Panel>
							<Card className="relative w-full items-start justify-start !p-6">
								<Span className="text-muted">{npm}</Span>

								<Button
									variant="outline"
									onClick={handlecopyNPM}
									className="text-sm absolute top-3 right-3 !px-3"
								>
									{copyNPM ? (
										<HStack className="gap-x-2">
											<Span text="Скопировано!" />
											<CheckIcon className="w-5 text-green-600" />
										</HStack>
									) : (
										<Span text="Копировать" />
									)}
								</Button>
							</Card>
						</Tabs.Panel>
						<Tabs.Panel>
							<Card className="relative w-full items-start justify-start !p-6 text-muted">
								<Span className="text-muted">{yarn}</Span>

								<Button
									variant="outline"
									onClick={handlecopyYarn}
									className="text-sm absolute top-3 right-3 !px-3"
								>
									{copyYarn ? (
										<HStack className="gap-x-2">
											<Span text="Скопировано!" />
											<CheckIcon className="w-5 text-green-600" />
										</HStack>
									) : (
										<Span text="Копировать" />
									)}
								</Button>
							</Card>
						</Tabs.Panel>
					</Tabs.PanelList>
				</Tabs>
			</Stack>

			<Stack className="mt-8">
				<Heading level="4" className="font-semibold mb-2" text="Второй шаг" />

				<Div className="leading-8 text-muted">
					<Markdown>Импортируйте стили `megatizerui` в ваш главный `.css` файл</Markdown>
				</Div>

				<Card className="code-highlighter relative w-full items-start justify-start !p-0 overflow-hidden mt-6">
					<CodeBlock value={css} language="css" />

					<Button
						variant="outline"
						onClick={handlecopyCSS}
						className="text-sm absolute top-3 right-3 !px-3"
					>
						{copyCSS ? (
							<HStack className="gap-x-2">
								<Span text="Скопировано!" />
								<CheckIcon className="w-5 text-green-600" />
							</HStack>
						) : (
							<Span text="Копировать" />
						)}
					</Button>
				</Card>
			</Stack>

			<Stack className="mt-8">
				<Heading level="4" className="font-semibold mb-2" text="Готово!" />

				<Div className="leading-8 text-muted">
					<Markdown>Желаем приятной работы вместе с `megatizerui`</Markdown>
				</Div>
			</Stack>

			<DocsPagination nextPage={props.nextPage} />
		</Stack>
	);
};
