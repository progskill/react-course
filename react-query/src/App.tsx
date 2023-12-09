import { useState } from 'react'
import Forms from './demo/Forms'

function App() {
 const [userId] = useState(1)
  return (
    <main>
      <Forms key={userId} userId={userId}/>
    </main>
  )
}

export default App
