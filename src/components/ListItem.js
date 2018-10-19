import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import  { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
	
	render() {
		const { textStyle } = styles;
		console.log(this.props)
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

export default connect(null, actions)(ListItem);