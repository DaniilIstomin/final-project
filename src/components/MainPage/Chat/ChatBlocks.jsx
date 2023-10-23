import './Style.css'

const ChatBlock = (props) => {
    return (
        <div className='container-chat-block'>
            <h2>Чат:</h2>
            {props.chatData.map((el, i) => {
                return (
                    <div key={i} >
                    {i + 1}. {el}
                    </div>
                )
                
            })}
        </div>
    )

}

export default ChatBlock;