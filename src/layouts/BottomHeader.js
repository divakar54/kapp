import React from 'react'
import { mdiCardsHeartOutline } from '@mdi/js';
import { mdiShareOutline } from '@mdi/js';
import { mdiChevronRight } from '@mdi/js';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
const BottomHeader = () => {
  return (
    <div className='flex justify-between w-3/4'>
      <LinkButton title="See class Schedule" icon={mdiChevronRight}/>
      <Button title="Save" icon={mdiCardsHeartOutline}/>
      <Button title="Share" icon={mdiShareOutline} />
    </div>
  )
}

export default BottomHeader