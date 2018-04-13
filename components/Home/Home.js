import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
	Button,
	Toast,
	Radio,
	Flex,
	List, 
	Checkbox,
} from 'antd-mobile';
/*import styles from './HomeScreenStyle.js';*/
class Home extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			account: "",
			password: "",
			repair:[],
			check:false,
			tt:[],
		};
	}
	handleSubmit_1 = () =>{
		this.props.navigation.navigate("QrCode");
	}
	handleSubmit_1 = () =>{
		this.props.navigation.navigate("BaiduMap");
	}
	
	   
	  
	render(){
		return <View style={{
        flex: 1,
        flexDirection: 'column',
        /*justifyContent: 'space-between',*/
      }}>
        <View><Button type='primary' onClick={this.handleSubmit_1}>扫一扫</Button></View>
        <View><Button type='primary' onClick={this.handleSubmit_2}>地图</Button></View>
      </View>
	}
}
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  images:{
  	width:40,
  	height:40
  },
  listContain:{
  	flexDirection: 'row',
  	backgroundColor:'white',
  	marginBottom:20
  	/*justifyContent: 'space-between',*/
  },
  listitem:{
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	borderColor: '#ddd', 
	borderBottomWidth: 1,
	paddingBottom:5,
	paddingTop:5,
  },
  radios:{
  	padding: 2.5,
	borderWidth: 1,
	borderColor:'#ccc',
	borderRadius: 2,
	marginRight: 5,
  }
});
export default Home;