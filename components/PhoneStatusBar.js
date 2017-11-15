import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';

const PhoneStatusBar = (props) => (
	<View style={{ height: Constants.statusBarHeight }}>
		<StatusBar {...props} />
	</View>
);

export default PhoneStatusBar;
