import './index.scss'

export interface Props {
  words: number,
  characters: number,
  sentences: number,
  paragraphs: number,
  pronouns: number
}

const ResultBox = (props: Props) => {
  const resultBar = [
    {
      title: 'Words',
      value: props.words,
    },
    {
      title: 'Characters',
      value: props.characters,
    },
    {
      title: 'Sentences',
      value: props.sentences,
    },
    {
      title: 'Paragraphs ',
      value: props.paragraphs,
    },
    {
      title: 'Pronouns',
      value: props.pronouns,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
