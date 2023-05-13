import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {exampleActions} from '../store/example/example.slice'

const allActions = {
  ...exampleActions
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}