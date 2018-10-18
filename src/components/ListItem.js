import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
	
	render() {
		const { textStyle } = styles;

		return(
			<CardSection>
				<Text style={textStyle}>{this.props.library.item.title}</Text>
			</CardSection>
		);
	};
}

const styles = {
	textStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

export default ListItem;