import {
	StyleSheet
} from 'react-native';
import theme from './theme.js';
export default StyleSheet.create({
	hide: {
		height: 50,
		display: 'none'
	},
	buttonBlack: {
		backgroundColor: theme.themeColor,
		borderColor: theme.themeColor,
	},
	header: {
		elevation: 0,
		shadowOpacity: 0,
		height: 48,
		backgroundColor: theme.navigatorColor,
	},
	tabBarIndicator: {
		height: 0,
		backgroundColor: 'red',
	},
	headerTitleStyle: {
		alignSelf: 'center',
		fontWeight: 'normal',
		color: theme.black,
		fontSize: 16,
	},
	input: {
		borderWidth: 0.5,
		borderColor: theme.borderColor,
		fontSize: 13,
		padding: 4,
	},
	separator: {
		height: 0.5,
		backgroundColor: 'rgb(200, 199, 204)',
	},
	redText: {
		color: theme.red,
		fontWeight: 'bold',
	},
	footer: {
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	left: {
		paddingLeft: 20,
		paddingVertical: 15,
		flex: 1,
		flexDirection: 'row',
	},
	leftText: {
		color: theme.blue,
		fontWeight: 'bold',

	},
	totalText: {
		color: theme.black,
	},
	right: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		backgroundColor: theme.blue,
		justifyContent: 'center',
		color: 'white',
		flex: 1,
		textAlign: 'center',
	},
	tabBarLeftIcon: {
		fontSize: 14,
		paddingLeft: theme.horizontal,
		color: theme.black,
	},
	tabBarRightIcon: {
		fontSize: 24,
		paddingRight: theme.horizontal,
		color: theme.black,
	},
	tabBarLeftText: {
		fontSize: 14,
		paddingLeft: theme.horizontal,
		color: theme.black,
		fontWeight: 'bold',
	},
	tabBarRightText: {
		fontSize: 14,
		paddingRight: theme.horizontal,
		color: theme.black,
		fontWeight: 'bold',
	},
});