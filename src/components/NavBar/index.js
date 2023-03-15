import './index.css'

const NavBar = props => {
  const {listScore, listTopScore, isDisplayLoss} = props
  //   console.log(listScore)
  return (
    <nav className="nav-container">
      <ul className="">
        <div className="list-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="Emoji-heading">Emoji Game</h1>
        </div>
        {isDisplayLoss ? (
          ''
        ) : (
          <div className="list-score-container">
            <p className="score">{`Score: ${listScore}`}</p>
            <p className="top-score">{`Top Score: ${listTopScore}`}</p>
          </div>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
