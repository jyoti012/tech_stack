import React, { Component } from 'react';
import { 
	Text, 
	View, 
	TouchableWithoutFeedback, 
	UIManager,
	LayoutAnimation 
} from 'react-native';
import { CardSection } from './common';
import  { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
	
	componentWillUpdate() {
		//UIManager for android to support LayoutAnimation
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, expand } = this.props;

		if(expand) {
			return(
				<CardSection>
					<Text	style={{ flex: 1, paddingLeft: 18}}>
						{library.item.description}
					</Text>
				</CardSection>
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