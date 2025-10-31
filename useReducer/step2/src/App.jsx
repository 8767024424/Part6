import React from 'react'
import AnecdoteList from './components/AnecdoteList.jsx'
import AnecdoteForm from './components/AnecdoteForm.jsx'
import Notification from './components/Notification.jsx'

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <div>
          <h1>Anecdotes</h1>
          <div className="sub">Vote your favorite — UI updates automatically with React Query</div>
        </div>
      </div>

      <Notification />

      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App
