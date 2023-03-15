import './index.css'

const WinOrLoseCard = props => {
  const {yourScore, onPlayAgain, LossOrWon} = props

  const lossWon = LossOrWon ? 'You Won' : 'You Lose'
  const scoreName = LossOrWon ? 'Best Score' : 'Score'

  const ImageGame = LossOrWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="container-bg-win">
      <div className="score-container">
        <h1 className="you-loss-won">{lossWon}</h1>
        <p className="score-won-loss">{scoreName}</p>
        <p className="your-Score">{yourScore}/12</p>
        <button className="play-again" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img src={ImageGame} alt="win or lose" className="emoji-image-game" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
