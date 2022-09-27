import React from 'react';

const Information = (props) => {

  return (
    <article className='container'>
      <p>{props.title}</p>
      <p>{props.company}</p>
      <p>{props.time}</p>
      <p>{props.location}</p>
    </article>
  )
}

export default Information;