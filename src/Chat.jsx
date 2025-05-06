import React, { useEffect, useState } from 'react'
import { db } from "./fireconfig.js";
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import './index.css'

export default function Chat(){
    const [chats , setChats] = useState([])
    const [text , setText] = useState('')
    const chatRef = collection(db , 'chats')

    useEffect(()=>{
        const q = query(chatRef , orderBy('createAt'))
        onSnapshot(q , (list)=> setChats( list.docs.map(i => i.data())))
    } , [])

    const send = ()=>{
        addDoc(chatRef , {msg:text , name:'Taha' , createAt:Date.now()})
        setText('')
    }

  return (
    <div className='Chat-container'>
        <div className='chat-box'>
            <div className='message-list'>
                {chats.map((e , index)=>{
                    <div key={index} className='message'>
                        <div className='message-content'>
                            <h4>{e.name}</h4>
                            <p>{e.msg}</p>
                            <p>{Date.now(e.createAt).toLocaleString()}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div className='input-container'>
            <input 
            type="text"
            placeholder='Type your message'
            onChange={e => e.target.value} 
            className='input-box'
            />
            <button className='send-button' onClick={send}>Send</button>
        </div>
    </div>
  )
}

// export default Chat