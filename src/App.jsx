import './App.css'
import { useDispatch } from 'react-redux'
import { getUserAuth } from './redux/actions'
function App() {
  const dispatch = useDispatch()
  dispatch
  useEffect(() => {
    dispatch(getUserAuth())
  }, [])
  return (<>
  </>)
}

export default App
