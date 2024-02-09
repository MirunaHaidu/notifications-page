import { useState, useEffect } from 'react'
import './App.css'
import notifications from "./db.json"
import Header from './components/Header'
import NotificationList from './components/NotificationList'

function App() {
  const [data, setData] = useState(notifications)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    countUnread()
  }, [])

  // Mark one notification as read
  const markRead = (id) => {
    const newNotificatons = data.map((n) => {
      if (n.id === id) {
        const newNotification = { ...n, newPost: false }
        return newNotification
      }
      return n
    })
    setData(newNotificatons)
    if (counter > 0) {
      setCounter(counter - 1)
    }
    return
  }

  // Mark all notifications as read

  const markAll = () => {
    const newNotifications = data.map((n) => {
      const newNotification = {...n, newPost: false }
      return newNotification
    })
    setData(newNotifications)
    setCounter(0)
  }

  // Count unread notifications

  const countUnread = () => {
    const unread = data.filter((n) => {
      return n.newPost === true
    })
    setCounter(unread.length)
  }

  return (
    <div className='app-container'>
      <Header markAll={markAll} counter={counter}/>
      <NotificationList notifications={data} markRead={markRead}/>
    </div>
  )
}

export default App
