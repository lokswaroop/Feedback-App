// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackClicked: false}

  onClickEmoji = () => this.setState({isFeedbackClicked: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="card">
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="con">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" onClick={this.onClickEmoji}>
                <img src={emoji.imageUrl} alt={emoji.name} className="image" />
                <br />
                <span>{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="card">
        <img src={loveEmojiUrl} alt="love emoji" className="image" />
        <h1>Thank you</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackClicked} = this.state
    return (
      <div className="bg">
        <div className="container">
          {isFeedbackClicked
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
