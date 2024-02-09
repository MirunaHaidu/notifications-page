import '../styles/Notification.css'

const Notification = ({ id, newPost, avatar, username, text, post, isGroup, isMessage, message, timestamp, markRead }) => {
    return (
        <div onClick={() => markRead(id)} className={newPost ? "notification-unread" : "notification"}>
            <img src={avatar} alt={username} className="avatar"/>
            <div className="info">
                <div className="actions">
                    <p className="username">{username}</p>
                    <p className="text">{text}</p>
                    {isGroup ? (
                        <p className="group">{post}</p>
                    ) : (
                        <p className="post">{post}</p>
                    )}
                    {newPost && <div className="alert-dot"></div>}
                </div>
                <p className="timestamp">{timestamp}</p>
                {isMessage && <p className='private-msg'>{message}</p>}
            </div>
        </div>
    )
}

export default Notification