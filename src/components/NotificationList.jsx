import Notification from "./Notification";

const NotificationList = ({ notifications, markRead }) => {
    return (
        <div className="list-container">
            {notifications.map((notification) => {
                return <Notification key={notification.id} {...notification} markRead={markRead}/>
            })}
        </div>
    )
}

export default NotificationList