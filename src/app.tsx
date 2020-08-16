import React from "react";
import Recoil from "recoil";
const { RecoilRoot, atom, useRecoilState, selector, useRecoilValue } = Recoil;

const textState = atom({
  key: 'textState',
  default: ''
})

function TextInput() {
  const [text, setText] = useRecoilState(textState)

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState)

    return text.length
  }
})

function CharacterCount() {
  const count = useRecoilValue(charCountState)

  return (<>Character Count: {count}</>)
}

const CharacterCounter = () => {
  return (
    <>
      <TextInput />
      <CharacterCount />
    </>
  )
}

export function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
