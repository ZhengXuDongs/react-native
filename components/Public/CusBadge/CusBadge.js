import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../../theme.js';
class CusBadge extends Component {

	constructor(props) {
		super(props);
	}
	render() {
		return <View style={[styles.body,this.props.style]}>
			{this.props.text?<View style={styles.badge}><Text style={styles.badgeText}>
				{this.props.overflowCount&&this.props.text
					&&this.props.text>this.props.overflowCount?(this.props.overflowCount+"+")
					:this.props.text}</Text></View>:null}
			<View style={styles.content}>
				{this.props.children}
			</View>
		</View>
	}
}
const styles = StyleSheet.create({
	body: {},
	badge: {
		flexShrink: 0,
		backgroundColor: theme.red,
		borderRadius: 8,
		borderWidth:1,
		borderColor: theme.red,
		paddingHorizontal: 5,
		position: 'absolute',
		alignSelf: 'flex-end',
		zIndex: 1,
	},
	badgeText: {
		textAlign: 'right',
		color: 'white',
		fontSize: 10,
	},
	content: {
		marginTop: 6,
		justifyContent: 'flex-end',
		paddingRight: 8,
	}
})
export default CusBadge;