const rx = require('rxjs')

const express = require('express')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080

const feedbacks = new Map()

feedbacks.set(1, { id: 1, text: 'This is first review', rating: 7 })
feedbacks.set(2, { id: 2, text: 'This is second review', rating: 10 })
feedbacks.set(3, { id: 3, text: 'This is third review', rating: 9 })

var nextFeedbackId = feedbacks.size + 1

// get all feedbacks
app.get('/api/feedbacks', (req, res) => {
  console.log('Fetching feedbacks ...')
  setTimeout(() => {
    feedbacksArray = []
    feedbacks.forEach((val, key) => {
      feedbacksArray.push(val)
    })
    res.json(feedbacksArray)
  }, '1000')
})

// create feedback
app.post('/api/feedbacks', (req, res) => {
  console.log('Creating feedback ...')
  feedback = {
    id: nextFeedbackId++,
    text: req.body.text,
    rating: req.body.rating,
  }
  feedbacks.set(feedback.id, feedback)
  return res.json(feedback)
})

// update feedback
app.put('/api/feedbacks/:feedbackId', (req, res) => {
  console.log('Updating feedback ...')
  feedback = feedbacks.get(+req.params.feedbackId)
  feedback.text = req.body.text
  feedback.rating = req.body.rating
  feedbacks.set(feedback.id, feedback)
  return res.json(feedback)
})

// delete feedback
app.delete('/api/feedbacks/:feedbackId', (req, res) => {
  console.log('Deleting feedback ...')
  feedback = feedbacks.get(+req.params.feedbackId)
  feedbacks.delete(+req.params.feedbackId)
  return res.json(feedback)
})

app.listen(PORT, () => {

  const observable = new rx.Observable((observer) => {
    observer.next(20)
  })
  
  const observer1 = value => console.log("Observer1 received value " + value)
  const observer2 = value => console.log("Observer2 received value " + value)
  const observer3 = value => console.log("Observer3 received value " + value)

  observable.subscribe(observer1)
  observable.subscribe(observer2)
  observable.subscribe(observer3)

  const subject = new rx.Subject()

  subject.next(1)

  subject.subscribe(observer1)

  subject.next(2)
  subject.next(3)

  subject.subscribe(observer2)

  subject.next(4)

  subject.subscribe(observer3)

  subject.next(5)
  subject.next(6)

  console.log(`API server is listening on port ${PORT}`)
})
