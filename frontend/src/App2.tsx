import React from 'react'

const App2 = () => {
  const title = 'Blog post'
  const body = 'This is my blog post'
  const comments = [
    { id: 1, text: 'Comment one' },
    { id: 2, text: 'Comment two' },
    { id: 3, text: 'Comment three' },
  ]

  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      <div className='comments'>
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>comment.text</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App2
