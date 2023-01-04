import React from 'react'

const FbAvaiUsers = ({ setChatContLeft, setFriendUser, allUsers, user, fbReqBtn, dispatch, allUpdatedBtns, updateFbBtnsAct, setFbBtnsAct, MakeReqBtn, navigate, avtStyles, Avatar }) => {
    return (
        <>
            <div className='fb-users-cont'>
                {
                    allUsers === null ? <h4>No Users Available...</h4> :
                        <h4>Other Available Users ({allUsers?.data?.length - 1})</h4>
                }
                {
                    allUsers?.data?.map(users => {
                        return users?._id.includes(user?.result._id) ? null :
                            <div key={users._id} className='fb-users-list' >
                                <div className='fb-avt-div' onClick={() => navigate(`/user/${users?._id}`)} style={{ textDecoration: 'none' }}>
                                    <Avatar icon={users?.name[0]?.toUpperCase()} avtStyles={avtStyles} />
                                </div>
                                <p onClick={() => navigate(`/user/${users?._id}`)}>{users?.name}</p>
                                <MakeReqBtn setChatContLeft={setChatContLeft} setFriendUser={setFriendUser} navigate={navigate} setFbBtnsAct={setFbBtnsAct} updateFbBtnsAct={updateFbBtnsAct} allUpdatedBtns={allUpdatedBtns} dispatch={dispatch} fbReqBtn={fbReqBtn} users={users} user={user} allUsers={allUsers} />
                            </div>
                    })
                }
            </div>
        </>
    )
}

export default FbAvaiUsers