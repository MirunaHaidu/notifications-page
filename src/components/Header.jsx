const Header = ({ markAll, counter }) => {
    return (
        <header>
            <div className="title">
                <h1>Notifications</h1>
                <div className="counter">
                    {counter}
                </div>
            </div>
            <button onClick={markAll} name="button" type="button">
                Mark all as read
            </button>
        </header>
    )
}

export default Header