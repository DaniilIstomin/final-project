import {Link} from "react-router-dom";
import './Style.css'
const Comment = (props) => {
    return (
        <div className="container-chat">
            <label>Напиши что-нибудь</label>
            <input 
            value={props.inputValue}
            onChange={(e) => props.setInputValue(e.target.value)}
            />
            <button className="btn-chat" onClick={props.sendChat}>Отправить</button>
            <button className="btn-chat" onClick={() => props.setChatData([])}>Отчистить всё</button>
            {props.showDialog && (
                <div>
                    Вы не авторизовались, перейдите по <Link to='/authorization'>ссылке</Link>
                </div>
            )}
        </div>
    )
}
export default Comment;