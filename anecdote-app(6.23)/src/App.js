import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationContextProvider } from './context/NotificationContext'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationContextProvider>
        <div>
          <h2>Anecdote app</h2>
          <Notification />
          <AnecdoteForm />
          <AnecdoteList />
        </div>
      </NotificationContextProvider>
    </QueryClientProvider>
  )
}

export default App