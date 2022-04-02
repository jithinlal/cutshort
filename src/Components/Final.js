import { Button, Center, Text, ThemeIcon, Title } from '@mantine/core';
import { Check } from 'tabler-icons-react';
import Base from './Base';

export default function Final({ nextStep }) {
	return (
		<Base>
			<Center>
				<ThemeIcon radius='xl' size='xl'>
					<Check />
				</ThemeIcon>
			</Center>
			<Title order={1}>Congratulations, Eren!</Title>
			<Text>You have completed onboarding, you can start using the Eden!</Text>
			<Button>Launch Eden</Button>
		</Base>
	);
}
