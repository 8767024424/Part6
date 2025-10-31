import React from 'react'
import { useNotification } from '../context/notificationContext.jsx'

const Notification = () => {
  const { message } = useNotification()
  if (!message) return null
  return <div className="notification">{message}</div>
}

export default Notification
