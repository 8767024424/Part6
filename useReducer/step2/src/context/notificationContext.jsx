import React, { createContext, useContext, useState } from 'react'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState('')

  const show = (msg, ms = 3000) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), ms)
  }

  return (
    <NotificationContext.Provider value={{ message, show }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificationContext)
}
