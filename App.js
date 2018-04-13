import React, {
	Component
} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {
	StackNavigator,
	TabNavigator,
	TabBarBottom
} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import theme from './theme.js';
import styles from './AppStyle.js';
import WebIM from './Utils/webIm/WebIM.js';

import Login from './components/Login/Login.js';
import QrCode from './components/QrCode/QrCode.js';
import BaiduMap from './components/BaiduMap/BaiduMap.js';
import Home from './components/Home/Home.js';
const Navigator = StackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			headerStyle: styles.hide
		}
	},
	Home: {
		screen: Home,
		navigationOptions: {
			headerStyle: styles.hide
		}
	},
	QrCode: {
		screen: QrCode,
		navigationOptions: {
			headerStyle: styles.hide
		}
	},
	BaiduMap: {
		screen: BaiduMap,
		navigationOptions: {
			headerStyle: styles.hide
		}
	},
}, {
	navigationOptions: {
		headerStyle: styles.header,
		headerBackTitle: null,
		headerTintColor: theme.black,
		headerTitleStyle: styles.headerTitleStyle,
	},
	initialRouteName: "Login",
	transitionConfig: () => ({
		screenInterpolator: CardStackStyleInterpolator.forHorizontal, // 安卓导航进入 左右方式
	}),
	mode: 'card',
})
class App extends Component {
	render() {
		return <Navigator screenProps={{themeColor:'red'}}/>
	}
}

export default App