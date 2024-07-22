import Faqs from './components/Faqs'

import './App.css'

const faqsList = [
  {
    id: 0,
    questionText: 'What is "Queens of Tears" about?',
    answerText:
      ' The series depicts the crisis and rekindling of love between Hong Hae-in, a third-generation chaebol heiress of Queens Group, and Baek Hyun-woo, the son of farmers from Yongdu-ri, and their three years of marriage.',
  },
  {
    id: 1,
    questionText: 'Where can I watch "Queens of Tears"?',
    answerText:
      'Queens of Tears" is available for streaming on popular platforms like Netflix and Viki, with subtitles in multiple languages.',
  },
  {
    id: 2,
    questionText: 'What is "One Piece" about?',
    answerText:
      'One Piece" is a long-running anime series that follows Monkey D. Luffy and his pirate crew in their quest to find the ultimate treasure known as "One Piece" and become the Pirate King.',
  },
  {
    id: 3,
    questionText: 'How many episodes does "One Piece" have?',
    answerText:
      'One Piece" has over 1000 episodes and is still ongoing. The series has captivated audiences with its adventurous storyline and diverse characters.',
  },
]

const App = () => <Faqs faqsList={faqsList} />

export default App
