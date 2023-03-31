import React from 'react';

const Information = (props) => {


  return (
    <article className='container'>
       <div className='row'>
        {props.title && <p className='col'>{props.title}</p>}
        {props.company && <p className='col'>{props.company}</p>}
        {props.title && <p className='col'>{props.time}</p>}
        {props.location && <p className='col'>{props.location}</p>}
        {props.description && <p className='col'>{props.description}</p>}
      </div>
    </article>
  )
}

export default Information;