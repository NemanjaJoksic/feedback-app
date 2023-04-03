import React from 'react'

const Card = (props: React.PropsWithChildren) => {
  return <div className='card'>{props.children}</div>
}

export default Card
