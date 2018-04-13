import React, {Component} from "react";
import {Text, View,StyleSheet,} from "react-native";
import Toast from 'react-native-simple-toast';
import {QRScannerView} from 'ac-qrcode';


export default class OFOScreen extends Component {

    _renderTitleBar(){
        return(
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >这里添加标题</Text>
        );
    }
    _renderMenu() {
        return (
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >这里添加底部菜单</Text>
        )
    }

    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        //Linking.openURL(e.data).catch(err => console.error('An error occurred', err));
        //console.log(e)
    }


    render() {
        return (

            <QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}
                renderTopBarView={() => this._renderTitleBar()}
                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    
}

const Styles = StyleSheet.create({
    image_bottom_menu:{
        height:50,
        width:50,
        marginBottom:10,
    },
    view_menu_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:16
    },
    text_menu_title:{
        color:'white',
        fontSize:14
    },
    view_menu_item_container:{
        justifyContent:'center',
        alignItems:'center',
    }
});