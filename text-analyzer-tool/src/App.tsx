import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

import { useState } from 'react';

const App = () => {
  const [ words, setWords ] = useState( 0 );
  const [ characters, setCharacters ] = useState( 0 );
  const [ sentences, setSentences ] = useState( 0 );
  const [ paragraphs, setParagraphs ] = useState( 0 );
  const [ pronouns, setPronouns ] = useState( 0 );
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox words={ words } characters={ characters } sentences={ sentences } paragraphs={paragraphs} pronouns={pronouns}/>
          <TextArea setWords={ setWords } setCharacters={ setCharacters} setSentences={setSentences} setParagraphs={setParagraphs} setPronouns={setPronouns} />
          <BottomResultBox/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
