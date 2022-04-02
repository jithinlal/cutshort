import {
	Box,
	Button,
	Space,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from '@mantine/core';
import { User, Users } from 'tabler-icons-react';
import { useState } from 'react';
import Base from './Base';

export default function Plan({ nextStep, ...rest }) {
	const [indexClicked, setIndexClicked] = useState(1);

	return (
		<Base {...rest}>
			<Title order={2}>How are you planning to use Eden?</Title>
			<Text>We'll streamline your setup experience accordingly</Text>
			<Box
				sx={(theme) => ({
					display: 'flex',
					[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
						display: 'block',
					},
					justifyContent: 'space-around',
					alignItems: 'center',
					textAlign: 'left',
					cursor: 'pointer',
				})}
			>
				<Box
					sx={(theme) => ({
						border:
							indexClicked === 1 ? `2px solid ${theme.colors.violet[6]}` : '',
						borderRadius: 5,
						padding: 20,
					})}
					onClick={() => setIndexClicked(1)}
				>
					<Stack>
						<ThemeIcon mb={10}>
							<User />
						</ThemeIcon>
						<Title order={4}>For myself</Title>
						<Text>
							Write better.
							<br /> Think more clearly.
							<br /> Stay organized.
						</Text>
					</Stack>
				</Box>
				<Space w='md' />
				<Box
					sx={(theme) => ({
						border:
							indexClicked === 2 ? `2px solid ${theme.colors.violet[6]}` : '',
						borderRadius: 5,
						padding: 20,
					})}
					onClick={() => setIndexClicked(2)}
				>
					<Stack>
						<ThemeIcon mb={10}>
							<Users />
						</ThemeIcon>
						<Title order={4}>With my team</Title>
						<Text>
							Wikis, docs, tasks &
							<br /> projects, all in one
							<br /> place.
						</Text>
					</Stack>
				</Box>
			</Box>
			<Button
				onClick={() => {
					nextStep();
				}}
			>
				Create Workspace
			</Button>
		</Base>
	);
}
