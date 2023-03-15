import './index.css'

const EmojiCard = props => {
  const {EachEmoji, onClickEachEmoji} = props
  const {emojiName, emojiUrl, id} = EachEmoji

  const onClickEmoji = () => {
    onClickEachEmoji(id)
  }

  return (
    <li className="list-emoji">
      <button
        type="button"
        onClick={onClickEmoji}
        className="button-Click-emoji"
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
