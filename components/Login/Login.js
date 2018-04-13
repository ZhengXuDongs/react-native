import React, {
	Component
} from 'react';
import {
	Text,
	View,
	Alert,
	Keyboard,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import commonStyles from '../../AppStyle.js';
import PlainInput from '../Public/PlainInput/PlainInput.js';
import CusButton from '../Public/CusButton/CusButton.js';
import theme from '../../theme.js';
import WebIMHelper from '../../Utils/webIm/WebIMHelper.js';


class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			account: "13112345674",
			password: "123456",
			animating: false,
		};
	}
	componentWillMount() {
		/*this.checkUpdate()*/
	}
	handlePress = () => {
		if (WebIM.conn.isOpened()) {
			WebIM.conn.close('logout')
		}
		console.log('open')
		WebIM.conn.open({
			apiUrl: WebIM.config.apiURL,
			user: "wangfei",
			pwd: "123456",
			//  accessToken: password,
			success: (token) => {
				console.log(48, token);
				var token = token.access_token;
				//WebIM.utils.setCookie('webim_' + encryptUsername, token, 1);
			},
			error: () => {
				console.log(52, "login error");
			},
			appKey: WebIM.config.appkey
		})
	}
	handleLoginout = () => {
		WebIM.conn.close();
	}
	handleMessage = () => {
		WebIMHelper.sendPrivateText("hello world!", "wangfei", this.sendSuccess)
	}
	sendSuccess = (id, serverMsgId) => {
		console.log("sendSuccess", id, serverMsgId);
	}
	handleModify = () => {
		console.log('handleModify');
		this.props.navigation.navigate("ModifyPassword");
	}
	handleClick = () => {
		this.props.navigation.navigate("Home");
		/*if (this.state.account && this.state.password) {
			let param = {
				userName: this.state.account,
				password: this.state.password,
			}
			this.setState({
				animating: true
			})
			httpHelper.post("/rest/repairer/login", param).then(res => {
				this.setState({
					animating: false
				})
				if (res.isSucc) {
					Keyboard.dismiss();
					Storage.set('user', res.result)
					this.props.navigation.navigate("Home");
				} else {
					Toast.fail(res.message, 3);
				}
			})

		} else {
			Toast.fail('请输入账号和密码', 2);
		}*/
	}

	handleModify = () => {
		console.log('handleModify');
		this.props.navigation.navigate("ModifyPassword");
	}
	updateText = (info) => {

	}
	render() {
		return <View style={styles.continner}>
			<View style={{flex:1}}></View>
			<View style={{flex:5}}>
			<View style={styles.body}>
				<Text>LOGO</Text>
				<PlainInput
			        style={styles.input}
			        placeholder="账号"
			        iconName="account-circle"
			        size={18}
			        onChangeText={(account) => this.setState({account})}
			        underlineColorAndroid="transparent"
			        value={this.state.account}
			    />
			    <PlainInput
			        style={styles.input}
			        placeholder="密码"
			        iconName="lock-open"
			        secureTextEntry={true}
			        size={18}
			        onChangeText={(password) => this.setState({password})}
			        value={this.state.password}
			    />
			    <CusButton style={styles.button} color={theme.themeColor} title="确定" onPress ={this.handleClick} />
				<Text onPress={this.handleModify}  style={styles.modify}>忘记密码？</Text>
			</View>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	continner: {
		paddingHorizontal: theme.horizontal_40,
		paddingTop: 80,
		flex: 1,
	},
	body: {
		backgroundColor: 'white',
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24,
	},
	input: {
		width: "100%",
		marginTop: theme.vertical_20,
		borderRadius: 4,
	},
	button: {
		width: "100%",
		marginTop: theme.vertical_20,
	},
	buttonBody: {
		backgroundColor: theme.blue,
		borderRadius: 4,
	},
	modify: {
		alignSelf: 'flex-start',
		marginTop: theme.vertical_16,
	}
});
export default LoginScreen;