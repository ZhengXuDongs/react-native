import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

class Separator extends React.PureComponent < {} > {
	render() {
		return <View style={styles.separator} />;
	}
}
const styles = StyleSheet.create({
	separator: {
		height: 0.5,
		backgroundColor: 'rgb(200, 199, 204)',
	}
})
export default Separator