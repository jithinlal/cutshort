import { Center, Container, Stack } from '@mantine/core';

export default function Base({ children }) {
	return (
		<Container mt={80}>
			<Center>
				<Stack
					style={{
						textAlign: 'center',
					}}
				>
					{children}
				</Stack>
			</Center>
		</Container>
	);
}
