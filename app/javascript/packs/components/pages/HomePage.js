import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../../actions'

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  renderList() {
    return this.props.todos.map(todo => {
      return (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>HomePage</h1>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos)
  }
}

export default connect(mapStateToProps, { fetchTodos })(HomePage)
