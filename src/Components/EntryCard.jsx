import React from 'react'
import { Icon } from '@iconify/react';

function EntryCard({icon,title,color}) {
  return (
    <div className="entry">
    <div className="date">
      <div className='icon' style={{background:`${color}`}}>
      <Icon icon={icon} />
      </div>
      <h3>11:30 AM</h3>
    </div>
    <div className="right-container">
      <div className="content">

      <h3>{title}</h3>
      <p>Farid alam</p>
      </div>
    </div>
  </div>
  )
}

export default EntryCard