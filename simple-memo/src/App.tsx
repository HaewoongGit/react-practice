import { ChangeEvent, useState } from 'react';
import styled from 'styled-components'

function App() {
  const [text, setText] = useState<string>('')
  const [memos, setMemos] = useState<string[]>([])

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)
  const onClickAdd = () => {
    const newMemos = [...memos]
    newMemos.push(text)
    setMemos(newMemos)
    setText("")
  }
  const onClickDelete = (index: number) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos)
  }


  return (
    <div>
      <h1>메모 애플리케이션</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>추가</SButton>
      <SContainer>
        <p>메모 목록</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={()=>onClickDelete(index)}>삭제</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    </div>
  );
}

const SButton = styled.button`
  margin-left:16px
`
const SContainer = styled.div`
  border: solid 1px #ccc
  pading: 16px
  margin: 8px
`
const SMemoWrapper = styled.div`
  display: flex
  align-items: center
`

export default App;
