import {useEffect, useRef , useState} from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("")

  const endRef = useRef(null)

  useEffect(()=> {
    endRef.current?.scrollIntoView({ behavior: "smooth"})
  }, [])

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Hae doe</span>
            <p>lorem</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png"></img>
          <img src="./video.png"></img>
          <img src="./info.png"></img>
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              sefiwjiwef
            </p>
            <span>i min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              sefiwjiwef
            </p>
            <span>i min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://images.pexels.com/photos/19036832/pexels-photo-19036832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
            <p>
              sefiwjiwef
            </p>
            <span>i min ago</span>
          </div>
        </div>
        
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png"></img>
          <img src="./camera.png"></img>
          <img src="./mic.png"></img>
        </div>
        <input 
          type="text"
          placeholder="Type a message" 
          onChange={e=>setText(e.target.value)} 
          value={text}
        />
          <div className="emoji">
            <img src="./emoji.png" onClick={()=>setOpen(prev => !prev)}></img>
            <div className="picker">
              <EmojiPicker 
                open={open} 
                onEmojiClick={handleEmoji}
              />
            </div>
          </div>
          <button className="sendButton">Send</button>
      </div>
    </div>
  )  
}

export default Chat