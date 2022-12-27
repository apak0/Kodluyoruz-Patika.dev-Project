import React, { useContext, useEffect } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init, subscribeChat} from "../sockeApi"
import {useChat} from '../context/ChatContext'



function Container() {

  const {setMessages} = useChat();

  useEffect(() => {
    init();

    subscribeChat((message)=> {
      setMessages(prevState => [...prevState, {message}])
    });
  }, [])

  return (
    <div className='App' >
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container