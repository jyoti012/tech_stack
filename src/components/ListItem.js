import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import  { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
	
	renderDescription() {
		const { library, expand } = this.props;

		if(expand) {
			return(
				<Text>{library.item.description}</Text>
			);
		}
	}

	render() {
		const { textStyle } = styles;
		const { id, title } = this.props.library.item;

		return(
			<TouchableWithoutFeedback
				onPress={() =>  this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={textStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	};
}

const styles = {
	textStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateTOProps = (state, ownProps) => {
	const expand = state.selectedLibraryId === ownProps.library.item.id;

	return { expand };
}

export default connect(mapStateTOProps, actions)(ListItem);