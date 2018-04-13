import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import theme from '../../../theme.js';
import Dimensions from 'Dimensions';
var {
	width
} = Dimensions.get('window');

class CusTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0
		};
	}
	handleTab = (index) => {
		this.setState({
			current: index
		})
		this.props.handleTab ? this.props.handleTab(this.props.tab[index], index) : null;
	}
	render() {

		let tabWidth = width / this.props.tab.length;
		return <View style={this.props.style}>
			<View style={styles.tab}>
				{this.props.tab.map((item,index)=>{
					return <Text key={index} onPress={this.handleTab.bind(this,index)} style={[styles.tabItem,{width: tabWidth},index==this.state.current?styles.tabItemActive:null]}>
						{item.title}</Text>
				})}
			</View>
			{this.props.children}
		</View>
	}
}
const styles = StyleSheet.create({
	tab: {
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	tabItem: {
		textAlign: 'center',
		color: theme.black,
		fontWeight: 'bold',
		paddingVertical: theme.vertical,
		borderBottomColor: 'white',
		borderBottomWidth: 2,
	},
	tabItemActive: {
		color: theme.blue,
		borderBottomColor: theme.blue,
	}
})
export default CusTab;