import React, { Component } from 'react';
import EmojiList from '../emojiData.json';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import EmojiValue from '../components/EmojiValue/EmojiValue';
import './Emoji.css';

class Emoji extends Component {

	state = {
		emojiData: [],
		inputSearchValue: '',
		updatedEmojiData: [],
	};

	componentDidMount() {
		this.setState({
			...this.state,
			emojiData: EmojiList
		});
	};

	inputChangeHandler = (event) => {
		let updatedEmojiData = this.state.emojiData.filter((item) => {
			return item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		});
		this.setState({
			...this.state,
			inputSearchValue: event.target.value,
			updatedEmojiData
		});
	};

	render() {
		return (
			<div className="Emoji-page-wrapper">
				<Header />
				<Search inputChangeHandler={(event) => this.inputChangeHandler(event)} /><br />
				<EmojiValue emojiData={this.state.inputSearchValue === '' ? this.state.emojiData : this.state.updatedEmojiData} />
				{
					this.state.inputSearchValue !== '' && this.state.updatedEmojiData.length === 0 && <h4>Emoji Not Found !!</h4>
				}
			</div>
		);
	};
};

export default Emoji;