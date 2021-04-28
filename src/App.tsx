import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider, createMuiTheme, Paper, Button } from '@material-ui/core/'
import { useState } from 'react'
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import HotelesList from './components/HotelesList'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		// marginTop: 32
		overflowX: 'hidden',
		paddingTop: 32,
		borderRadius: 0,
		color: '#4A4A4A',
	},
	topPanel:{
		borderRadius: 0,
		height: 62,
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center'
	}
})

const App = () => {
	const classes = useStyles()
	const [ isDarkMode, setIsDarkMode ] = useState(false)
	
	const darkTheme = createMuiTheme({
		palette:{
			type: 'dark',
			primary:{
				main: '#4caf50'
			}
		}
	})
	const lightTheme = createMuiTheme({
		palette:{
			type: 'light',
			primary: {
				main: '#126AFF',
			},
			text: {
				primary: '#4A4A4A'
			}
		}
	})

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<Paper className={classes.topPanel}>
				<Button onClick={() => setIsDarkMode(!isDarkMode)}>
					<SettingsBrightnessIcon color='disabled'/>
				</Button>
			</Paper>
			<Paper className={classes.root}>
				<HotelesList />
			</Paper>
		</ThemeProvider>
	)
}

export default App;
