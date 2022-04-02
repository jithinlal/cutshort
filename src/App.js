import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import Home from './Page/Home';

function App() {
	return (
		<ColorSchemeProvider colorScheme='light'>
			<MantineProvider
				theme={{
					colorScheme: 'light',
					primaryColor: 'violet',
					fontFamily: 'Inter, sans-serif',
				}}
			>
				<Home />
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
