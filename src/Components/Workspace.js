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

export default function Workspace({ nextStep, ...rest }) {
	const form = useForm({
		initialValues: {
			fullName: '',
			displayName: '',
		},
	});

	return (
		<Base {...rest}>
			<Title order={2}>Let's set up a home for all your work</Title>
			<Text>You can always create another workspace later</Text>
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
					<InputWrapper id='workspace-name' label='Workspace Name'>
						<Input
							id='workspace-name'
							label='Workspace Name'
							placeholder='Eden'
							{...form.getInputProps('fullName')}
						/>
					</InputWrapper>

					<InputWrapper
						mt='sm'
						id='workspace-url'
						label='Workspace URL (optional)'
					>
						<Box
							style={{
								display: 'flex',
							}}
						>
							<Input
								styles={(theme) => ({
									input: {
										borderTopLeftRadius: 4,
										borderBottomLeftRadius: 4,
										borderBottomRightRadius: 0,
										borderTopRightRadius: 0,
									},
								})}
								style={{
									width: '32%',
								}}
								id='workspace-url'
								placeholder='www.eden.com/'
								{...form.getInputProps('displayName')}
								disabled
							/>
							<Input
								styles={(theme) => ({
									input: {
										borderTopLeftRadius: 0,
										borderBottomLeftRadius: 0,
										borderBottomRightRadius: 4,
										borderTopRightRadius: 4,
									},
								})}
								style={{ width: '68%' }}
								id='workspace-url'
								placeholder='Example'
								{...form.getInputProps('displayName')}
							/>
						</Box>
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
