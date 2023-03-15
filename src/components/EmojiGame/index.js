import {Component} from 'react'

// eslint-disable-next-line import/no-named-as-default-member
import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    listsClickEmojis: [],
    DisplayLoss: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  filterClickEmojis = presentScore => {
    const {topScore} = this.state
    let newScore = topScore

    if (presentScore > newScore) {
      newScore = presentScore
    }

    this.setState({topScore: newScore, DisplayLoss: true})
  }

  onClickEachEmoji = id => {
    const {emojisList} = this.props
    const {listsClickEmojis} = this.state
    const includesEachId = listsClickEmojis.includes(id)
    const lengthClickEmojis = listsClickEmojis.length

    if (includesEachId) {
      this.filterClickEmojis(lengthClickEmojis)
    } else {
      if (lengthClickEmojis === emojisList.length - 1) {
        this.filterClickEmojis(emojisList.length)
      }
      this.setState(prevState => ({
        listsClickEmojis: [...prevState.listsClickEmojis, id],
      }))
    }

    // if (id !== prevStateId) {
    //   this.setState(prevState => ({score: prevState.score + 1}))
    // } else {
    //   this.setState(prevState => ({DisplayLoss: !prevState.DisplayLoss}))
    // }

    // if (score === 11) {
    //   this.setState({DisplayLoss: true, isLossOrWon: true})
    // }

    // console.log(this.shuffledEmojisList())
  }

  onPlayAgain = () => {
    this.setState({listsClickEmojis: [], DisplayLoss: false})
  }

  renderListEmojis = () => {
    const listsEmojis = this.shuffledEmojisList()
    return (
      <ul className="lists-emojis">
        {listsEmojis.map(eachObject => (
          <EmojiCard
            EachEmoji={eachObject}
            key={eachObject.id}
            onClickEachEmoji={this.onClickEachEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, DisplayLoss, listsClickEmojis} = this.state
    const {emojisList} = this.props
    const LossOrWonIn = emojisList.length === listsClickEmojis.length
    return (
      <div className="bg-container">
        <NavBar
          listScore={listsClickEmojis.length}
          listTopScore={topScore}
          isDisplayLoss={DisplayLoss}
        />
        <div className="container-card">
          {DisplayLoss ? (
            <WinOrLoseCard
              yourScore={listsClickEmojis.length}
              onPlayAgain={this.onPlayAgain}
              LossOrWon={LossOrWonIn}
            />
          ) : (
            this.renderListEmojis()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
