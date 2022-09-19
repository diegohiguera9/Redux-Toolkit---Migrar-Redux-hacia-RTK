import { useDispatch, useSelector } from "react-redux"
import { textInput } from "../store/reducers/Text.reducer"

const InputText = () => {
  const dispatch = useDispatch()
  const username = useSelector(state => state.textReducer.username)

  return (
    <input
      type={"text"}
      onChange={(e) => dispatch(textInput(e.target.value))}
      value={username}
    />
  )
}

export default InputText