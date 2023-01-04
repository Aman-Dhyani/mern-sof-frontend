import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveChatsAct } from '../../../Actions and Reducers/Actions/facebookAction';
import axios from "axios";
import Chatbox from './Chatbox';
import './chatbot.css'

const ChatRobt = () => {

    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => (state?.currentUserReducer))
    const realTimeChats = useSelector((state) => (state?.facebookReducer?.data))

    const handleSubmit = (e) => {
        e.preventDefault()
        user === null ? (alert("signup or login first to chat ") || navigate('/login')) :
            dispatch(saveChatsAct({ _id: user?.result?._id, message: query, sepId: user?.result?._id }))

        const fetchAnsFromApi = {
            method: 'GET',
            url: 'https://question-answer.p.rapidapi.com/question-answer',
            params: { question: query },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'question-answer.p.rapidapi.com'
            }
        };

        axios.request(fetchAnsFromApi)
            .then((resp) => {
                return dispatch(saveChatsAct({ _id: user?.result?._id, message: `${resp?.data}`, sepId: "RobO_cHaTBoT" }))
            })
            .catch((err) => console.error(err));
        setQuery("")
    }

    return (
        <div className='chatbot-cont'>
            <div className='chat-bot-chats-screen'>
                {
                    realTimeChats?.map(
                        users => users?._id?.includes(user?.result?._id) ?
                            users?.chatBox?.map(cht =>

                                cht?.sepId?.includes(user?.result?._id) ?
                                    <Chatbox key={cht?._id} msgTime={cht?.messageOn} message={cht?.message} icon={cht} user={user} /> :
                                    <Chatbox key={cht?._id} msgTime={cht?.messageOn} message={cht?.message} icon={cht} />
                            )
                            : null
                    )
                }
            </div>
            <form className='chat-bot-lower-div' onSubmit={handleSubmit}>
                <input placeholder='Ask Any Question....' className='chat-ask-ques' type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <input className='chat-ask-ques-submit' type="submit" value="send" />
            </form>
        </div>
    )
}

export default ChatRobt