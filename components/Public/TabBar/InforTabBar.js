import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';
import {
	Badge
} from 'antd-mobile';
import commonStyles from '../../../AppStyle.js';
import CusBadge from '../CusBadge/CusBadge.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const InforTabBar = (nav) => {
	let param = nav.navigation.state.params;
	var options = {
		headerTitle: param ? param.title : "",
		headerRight: <View style={styles.right}>
			<CusBadge text={param?param.number:null}
				overflowCount={99}>
				<Icon onPress={()=>{nav.navigation.navigate("MessageList")}} 
				style={[commonStyles.tabBarRightIcon,styles.icon]} name='message-reply-text'/>
			</CusBadge>
		</View>
	}
	return options;
};


const styles = StyleSheet.create({
	right: {
		paddingRight: 8,
	},
	icon: {
		paddingRight: 0,
	},
})
export default InforTabBar;