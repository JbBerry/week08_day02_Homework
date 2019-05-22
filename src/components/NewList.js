import React, { Component } from 'react';

class NewList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listName: '',
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>List</label>
        <input
          type='text'
          id='listName'
          value={this.state.listName}
          onChange={this.handleFormChange}
        />
        <input
          type='submit'
          value='Another List'
        />
      </form>
    );
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addList(event.target.listName.value);
    this.setState({listName:''})
  }

  handleFormChange(event) {
    this.setState({ listName: event.target.value });
  }
};

export default NewList;
