import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		color: 'orange'
	}
});

const App = () => (
	<View style={styles.container}>
		<Text style={styles.text}>Olá Mundo!</Text>
	</View>
);

export default App;
