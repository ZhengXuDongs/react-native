import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../../theme.js';
class CusAccordion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			index: -1,
		};
	}
	handleTouch = (index) => {
		let current = this.state.index == index ? -1 : index;
		this.setState({
			index: current
		})
	}
	render() {
		return <View style={this.props.style}>
			{this.props.children.map((item,index)=>{
				return <Panel {...item.props} key={index}
				onPress={this.handleTouch.bind(this,index)}
				open={this.state.index==index?true:false}/>
			})}
		</View>
	}
}
class Panel extends Component {
	handlePress = () => {
		this.props.onPress();
		this.props.onChange();
	}
	render() {
		return <TouchableWithoutFeedback disabled={this.props.disabled} style={styles.disabled} onPress={this.handlePress}>
			<View>
				<View style={[styles.header:styles.header,this.props.style,this.props.disabled?styles.disabled:null]}>
					<Text>{this.props.header}</Text>
					<Text>
						{this.props.select?<MaIcon color={theme.blue} name="record"/>:null}&nbsp;&nbsp;
						<Icon style={styles.icon} name={this.props.open?"chevron-up":"chevron-down"}/>
					</Text>
				</View>
				{this.props.open?this.props.children:null}
			</View>
		</TouchableWithoutFeedback>
	}
}
CusAccordion.Panel = Panel;

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: theme.horizontal,
		paddingVertical: theme.vertical_16,
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: 'transparent',
		marginBottom: 1,
	},
	disabled: {
		backgroundColor: theme.borderColor,
	}
})
export default CusAccordion;