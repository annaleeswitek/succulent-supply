import React, { Component } from 'react'

export default class WriteReview extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      rating: 0,
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
    console.log('submitted!')
    console.log('this.state', this.state)
    event.preventDefault()
    this.setState({ title: '', rating: 0, body: '', author: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Rating:
          <input
            name="rating"
            type="text"
            value={this.state.rating}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Body:
          <input
            name="body"
            type="text"
            value={this.state.body}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Author:
          <input
            name="author"
            type="text"
            value={this.state.author}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
