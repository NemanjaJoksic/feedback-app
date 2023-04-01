import React from 'react'

type RatingSelectProps = {
  select: (x: number) => void
  selected: number
}

const RatingSelect = (props: RatingSelectProps) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const selectedRating = e.currentTarget.value
    console.log('Rating selected ' + selectedRating)
    props.select(+selectedRating)
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={props.selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
