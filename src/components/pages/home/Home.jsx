import React from 'react'
import HomeLeft from './HomeLeft'
import HomeMiddle from './HomeMiddle'
import HomeRight from './HomeRight'
import './home.css'
import { useLocation } from 'react-router-dom'

const Home = () => {

    const location = useLocation()
    console.log(location.pathname);

    return (
        <>
            <div className='home-cont'>
                <HomeLeft />
                <HomeMiddle />
                <HomeRight />
            </div>
        </>
    )
}

export default Home