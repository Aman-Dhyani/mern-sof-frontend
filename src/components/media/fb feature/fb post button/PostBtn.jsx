import React from 'react'
import './fbpostsbtn.css'
import refreshImg from '../../../../assets/refresh.png'
import { fetchFbPosts } from '../../../../Actions and Reducers/Actions/fbpostsAction'

const PostBtn = ({ Avatar, avtStyles, user, dispatch, navigate }) => {

    return (
        <>
            <div className='right-cont'>
                <div onClick={() => dispatch(fetchFbPosts())}>
                    <img className='fb-refresh-posts' src={refreshImg} alt="err" />
                    <p className='refresh-txt'>Refresh Page</p>
                </div>
                <div onClick={() => navigate('/fbpostform')} className="post-in-btn">
                    <p>+</p>
                </div>
                <p className='refresh-txt'>Post Images or Videos</p>
                <div onClick={() => navigate(`/user/${user?.result?._id}`)} className='fb-you-prof'>
                    <Avatar icon={user?.result?.name[0]?.toUpperCase()} avtStyles={avtStyles} />
                </div>
                <p className='fb-you-prof-text'>Your Profile</p>
            </div>
        </>
    )
}

export default PostBtn