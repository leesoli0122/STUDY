import './App.css'

import { useState } from 'react'

import MemoContainer from './components/MemoContainer'
import SideBar from './components/SideBar'
function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 17931687576260,
      updatedAt: 17931687576260,
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 17931687576263,
      updatedAt: 17931687576263,
    }
  ])

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    memos[selectedMemoIndex] = newMemo;

    console.log('memos', memos);

    setMemos(memos);
  }

  return (
    <div className='App'>
      <SideBar memos={memos}/>
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo}/>
    </div>
  )
}

export default App
