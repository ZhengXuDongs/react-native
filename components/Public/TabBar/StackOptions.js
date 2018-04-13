import React from 'react';
import {
	Button,
	View,
	Text,
	TextInput
} from 'react-native';
import styles from './TabBarStyle.js';
import commonStyle from '../../../AppStyle.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlainInput from '../PlainInput/PlainInput.js';
/**
 * 带搜索input的tabbar
 * searchText： 文字
 * handleSearch： 执行搜索
 * handleText： input的文字
 * leftPress： 右tabbar按键
 */

const StackOptions = (nav) => {

	let param = nav.navigation.state.params;
	var options = {
		headerTitle: <View style={styles.headerTitle}>
            	<PlainInput placeholder="输入订单号或手机号搜索订单"
            	value={param?param.searchText:""}
            	style={styles.tabBarInput}
            	onSubmitEditing={param&&param.handleSearch?param.handleSearch:null}
            	onChangeText={param?param.handleText:null}/>
            </View>,
		headerStyle: styles.header,
		headerTitleStyle: styles.headerTitleStyle,
		headerRight: <Icon onPress={param?param.leftPress:null} 
			style={commonStyle.tabBarRightIcon} name="autorenew"/>
	}
	return options;
};
export default StackOptions;