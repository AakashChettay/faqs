import {useState} from 'react'
import './index.css' // Update the import to the new CSS file

const FaqItem = props => {
  const {faq} = props
  const {questionText, answerText} = faq
  const [isHidden, setIsHidden] = useState(true)

  const toggleAnswer = () => {
    setIsHidden(!isHidden)
  }

  return (
    <li className="faqItem-style">
      <div className="question-and-btn-container">
        <h1 className="question">{questionText}</h1>
        <button
          type="button"
          className="view-or-hide-button"
          onClick={toggleAnswer}
        >
          <img
            src={
              isHidden
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
            }
            className="icon"
            alt={isHidden ? 'plus' : 'minus'}
          />
        </button>
      </div>
      {!isHidden && <p className="answer">{answerText}</p>}
    </li>
  )
}

export default FaqItem
