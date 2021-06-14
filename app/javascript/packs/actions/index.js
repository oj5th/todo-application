import internalAPI from '../apis/internal'
import history from '../history'
import { FETCH_TODOS, CREATE_TODO } from './types'

export const fetchTodos = () => async dispatch => {
  const response = await internalAPI.get('/todo_items')

  dispatch({
    type: FETCH_TODOS,
    payload: response.data
  })
}

export const createTodo = formValues => async (dispatch, getState) => {
  const response = await internalAPI.post('/todo_items', { ...formValues })

  dispatch({
    type: CREATE_TODO,
    payload: response.data
  })

  history.push('/')
}
