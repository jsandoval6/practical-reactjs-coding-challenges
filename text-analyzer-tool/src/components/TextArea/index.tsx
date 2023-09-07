import './index.scss'
import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { pronouns } from '../../data/pronouns';

export interface Props{
  setWords: Dispatch<SetStateAction<number>>,
  setCharacters: Dispatch<SetStateAction<number>>,
  setSentences: Dispatch<SetStateAction<number>>,
  setParagraphs: Dispatch<SetStateAction<number>>,
  setPronouns: Dispatch<SetStateAction<number>>,
}

const TextArea = (props: Props) => {
  
  const wordCount = ( text: string ): void => {
    const count: number = (text.match(/\w+/gi) || []).length;
    props.setWords( count );
  }

   const charsCount = ( text: string ): void => {
    const count: number = text.length
    props.setCharacters( count );
   }
  
  const sentenceCount = ( text: string ): void =>{
    const count: number = ( text.match( /\w+[^.!?]*[.!?]/gi ) || [] ).length;
    props.setSentences( count );
  }

  const paragraphCount = ( text: string ): void =>{
    const count: number = ( text.match( /(?:^|\n)[^\n]+\S/gi ) || [] ).length;
    props.setParagraphs( count );
  }

  const pronounsCount = ( text: string ): void =>{
    const words: string[] = text.match( /\w+/gi ) || [];
    const count: number = words.filter( word => pronouns.includes( word.toLowerCase() ) ).length;
    props.setPronouns( count );
  }
  
  const handleChange = ( e: ChangeEvent<HTMLTextAreaElement>) => {
    const text: string = e.target.value;
    wordCount( text );
    charsCount( text );
    sentenceCount( text );
    paragraphCount( text );
    pronounsCount( text );
  }

  return <textarea onChange={handleChange} className="text-area" placeholder="Paste your text here..." />
}

export default TextArea
