
import { Stack } from 'react-bootstrap'
import CreatePostCard from './CreatePostCard'
import PostCard from './PostCard'
import { useSelector, useDispatch } from 'react-redux'
import { setArticlesIsLoading } from '../../../redux/actions/actions'

const Center = () => {
  const dispatch = useDispatch();
  const articlesState = useSelector(state=> state.articlesState)
  const {isLoading, articles} = articlesState
  console.log(articles)
  return (
    <>
    <Stack gap={3}> 
    <CreatePostCard isLoading={isLoading}/>
    <PostCard/>  
    <PostCard/>  
    <PostCard/>  
    <PostCard/>  
    </Stack>
    </>
  )
}

export default Center