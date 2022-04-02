import { Button, Center, Text, ThemeIcon, Title } from '@mantine/core';
import { Check } from 'tabler-icons-react';
import Base from './Base';

export default function Final({ submit, fullName, ...rest }) {
	return (
		<Base {...rest}>
			<Center>
				<ThemeIcon radius='xl' size='xl'>
					<Check />
				</ThemeIcon>
			</Center>
			<Title order={1}>Congratulations, {fullName}!</Title>
			<Text>You have completed onboarding, you can start using the Eden!</Text>
			<Button onClick={submit}>Launch Eden</Button>
		</Base>
	);
}
