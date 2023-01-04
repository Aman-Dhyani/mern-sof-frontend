import React from 'react'
import FbAvaiUsers from './FbAvaiUsers'
import FbFriends from './FbFriends'
import FbRequests from './FbRequests'

const FbSliderMenu = ({ setChatContLeft, setFriendUser, refreshImg, Avatar, ChatBtn, MakeReqBtn, RemoveRequest, AcceptRequest, fetchAllFbUsers, setFbBtnsAct, updateFbBtnsAct, fbMenu,
    fbMenuColor, allUsers, user, allUpdatedBtns, navigate, dispatch, avtStyles, fbReqBtn, manageReqBtn }) => {

    return (
        <>
            <div className='fb-menu' style={{ left: fbMenu }}>
                <div className='fb-menu-head'
                    onClick={() =>
                        !user ? alert("login or sigup to perform actions") || navigate("/login") :
                            fbMenuColor === "white" ? dispatch(setFbBtnsAct({ userId: user?.result?._id, sliderValue: "0%" })) :
                                fbMenu === "0%" ?
                                    dispatch(updateFbBtnsAct({ userId: user?.result?._id, sliderValue: "-25%" })) :
                                    dispatch(updateFbBtnsAct({ userId: user?.result?._id, sliderValue: "0%" }))}>
                    <p style={{ color: fbMenuColor, cursor: 'pointer' }}>☰</p>
                </div>

                <FbAvaiUsers setChatContLeft={setChatContLeft} setFriendUser={setFriendUser} allUsers={allUsers} user={user} fbReqBtn={fbReqBtn} dispatch={dispatch} allUpdatedBtns={allUpdatedBtns}
                    updateFbBtnsAct={updateFbBtnsAct} setFbBtnsAct={setFbBtnsAct} MakeReqBtn={MakeReqBtn} navigate={navigate}
                    avtStyles={avtStyles} Avatar={Avatar} />

                <FbRequests
                    allUsers={allUsers} user={user} dispatch={dispatch} navigate={navigate} avtStyles={avtStyles} Avatar={Avatar}
                    fetchAllFbUsers={fetchAllFbUsers} refreshImg={refreshImg} AcceptRequest={AcceptRequest} manageReqBtn={manageReqBtn} />

                <FbFriends
                    allUsers={allUsers} user={user} dispatch={dispatch} updateFbBtnsAct={updateFbBtnsAct} navigate={navigate} avtStyles={avtStyles}
                    Avatar={Avatar} fetchAllFbUsers={fetchAllFbUsers} refreshImg={refreshImg} ChatBtn={ChatBtn} RemoveRequest={RemoveRequest}
                    manageReqBtn={manageReqBtn} />
            </div>
        </>
    )
}

export default FbSliderMenu