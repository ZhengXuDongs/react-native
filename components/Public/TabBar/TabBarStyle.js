import {
	StyleSheet
} from 'react-native';
import theme from '../../../theme.js';
export default StyleSheet.create({
	header: {
		backgroundColor: theme.backgroundColor,
	},
	headerTitle: {
		borderRadius: 4,
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: 'white',
		flex: 1
	},
	tabBarTitleIcon: {
		fontSize: 14,
	},
	tabBarIcon: {
		fontSize: 20,
		paddingLeft: 10,
		paddingRight: 10,
		borderColor: theme.black,
	},
	tabBarInput: {
		flex: 1,
		borderRadius: 15,
		borderColor: theme.borderColor,
		borderWidth: 1,
		height: 28,
		paddingHorizontal: 10,
		paddingVertical: 0,
	}
});