import {
	Box,
	Button,
	Center,
	Group,
	Input,
	InputWrapper,
	Text,
	Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Base from './Base';

export default function Welcome({ nextStep, ...rest }) {
	const form = useForm({
		initialValues: {
			fullName: '',
			displayName: '',
		},
	});

	return (
		<Base {...rest}>
			<Title order={1}>Welcome! First things first...</Title>
			<Text>You can always change them later</Text>
			<Box
				style={{
					textAlign: 'left',
				}}
			>
				<form
					onSubmit={form.onSubmit((values) => {
						console.log(values);
						nextStep();
					})}
				>
					<InputWrapper id='full-name' label='Full Name'>
						<Input
							id='full-name'
							label='Full Name'
							placeholder='Steve Jobs'
							{...form.getInputProps('fullName')}
						/>
					</InputWrapper>

					<InputWrapper mt='sm' id='display-name' label='Display Name'>
						<Input
							id='display-name'
							placeholder='Steve'
							{...form.getInputProps('displayName')}
						/>
					</InputWrapper>

					<Center>
						<Group mt='md' style={{ width: '100%' }}>
							<Button fullWidth type='submit'>
								Create Workspace
							</Button>
						</Group>
					</Center>
				</form>
			</Box>
		</Base>
	);
}
