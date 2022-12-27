import React, { useEffect } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init, subscribeChat} from "../sockeApi"



function Container() {


  useEffect(() => {
    init();

    subscribeChat();
  }, [])

  return (
    <div className='App' >
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container