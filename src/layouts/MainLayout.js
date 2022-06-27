import React from 'react'
import Description from '../components/Description'
import ImageContainer from '../components/ImageContainer'
import Ratings from '../components/Ratings'
import Teacher from '../components/Teacher'
import BottomHeader from './BottomHeader'
const MainLayout = () => {
  return (
    <div className='flex'>
        <div className='flex flex-col content-between w-2/4'>
            <Description />
            <Teacher />
            <Ratings />
            <div>Completed by 71 learners</div>
            <BottomHeader />
        </div>
        <ImageContainer />
    </div>
  )
}

export default MainLayout