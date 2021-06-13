import internalAPI from '../apis/internal'
import history from '../history'
import { FETCH_TODOS } from './types'

export const fetchTodos = () => async dispatch => {
  const response = await internalAPI.get('/todo_items')

  dispatch({
    type: FETCH_TODOS,
    payload: response.data
  })
}
