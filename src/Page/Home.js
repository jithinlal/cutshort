import React, { useState } from 'react';
import {
	Stepper,
	Container,
	Center,
	Stack,
	ActionIcon,
	Title,
} from '@mantine/core';
import {
	ShieldCheck,
	Number1,
	Number2,
	Number3,
	Number4,
} from 'tabler-icons-react';
import Welcome from '../Components/Welcome';
import Workspace from '../Components/Workspace';
import Plan from '../Components/Plan';
import Final from '../Components/Final';

function StyledStepper(props) {
	return (
		<Stepper
			breakpoint='sm'
			styles={(theme) => ({
				stepBody: {
					display: 'none',
				},
				step: {
					padding: 0,
					[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
						display: 'none',
					},
				},
				stepIcon: {
					borderWidth: 1,
					// backgroundColor: props.active > theme.colors.violet[6],
					// color: 'white',
				},
				separator: {
					marginLeft: -2,
					marginRight: -2,
					height: 2,
					[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
						display: 'none',
					},
				},
			})}
			{...props}
		/>
	);
}

export default function Home() {
	const [active, setActive] = useState(0);
	const [fullName, setFullName] = useState('');

	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current));

	const submit = () => {};

	return (
		<Container
			sx={(theme) => ({
				width: '75%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
					height: 'base',
				},
			})}
		>
			<Stack>
				<Center>
					<ActionIcon size='lg' radius='xs' variant='transparent'>
						<ShieldCheck />
					</ActionIcon>
					<Title order={3}>Eden</Title>
				</Center>
				<StyledStepper active={active} onStepClick={setActive}>
					<Stepper.Step
						label='1'
						allowStepSelect={active > 0}
						completedIcon={<Number1 />}
						icon={<Number1 />}
					>
						<Welcome nextStep={nextStep} setFullName={setFullName} />
					</Stepper.Step>
					<Stepper.Step
						label='2'
						allowStepSelect={active > 1}
						completedIcon={<Number2 />}
						icon={<Number2 />}
					>
						<Workspace nextStep={nextStep} />
					</Stepper.Step>
					<Stepper.Step
						label='3'
						allowStepSelect={active > 2}
						completedIcon={<Number3 />}
						icon={<Number3 />}
					>
						<Plan nextStep={nextStep} />
					</Stepper.Step>
					<Stepper.Step
						label='4'
						allowStepSelect={active > 3}
						completedIcon={<Number4 />}
						icon={<Number4 />}
					>
						<Final submit={submit} fullName={fullName} />
					</Stepper.Step>
				</StyledStepper>
			</Stack>
		</Container>
	);
}
