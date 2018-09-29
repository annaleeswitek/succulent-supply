import React, { Component } from 'react'
import { writeNewReview } from '../store/review'
import { connect } from 'react-redux'
import history from '../history'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';

class WriteReview extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      rating: '',
      body: '',
      author: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    event.preventDefault()
    const toSend = [this.state, this.props.match.params.succulentId]
    this.props.writeNewReview(toSend)
    this.setState({ title: '', rating: '', body: '', author: '' })
    history.push('/home')
  }

  render() {
    return (
      <Form className="center submit-form" onSubmit={this.handleSubmit}>
        <legend>Submit Your Review:</legend>
        <Input
          placeholder="Title of your review"
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <br />
        <Input
          placeholder="Rating 1-5 Stars"
          name="rating"
          type="text"
          value={this.state.rating}
          onChange={this.handleInputChange} />
        <br />
        <Textarea
          placeholder="Write Your Review"
          name="body"
          type="text"
          value={this.state.body}
          onChange={this.handleInputChange} />
        <br />
        <Input
          placeholder="Your name"
          name="author"
          type="text"
          value={this.state.author}
          onChange={this.handleInputChange} />
        <br />
        <button type="submit">Submit</button>
      </Form>
    )
  }
}

const mapDispatch = dispatch => ({
  writeNewReview(reviewAndId) {
    const thunk = writeNewReview(reviewAndId)
    dispatch(thunk)
  }
})

export default connect(null, mapDispatch)(WriteReview)
