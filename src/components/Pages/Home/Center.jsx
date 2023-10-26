
import { Spinner, Stack } from 'react-bootstrap'
import CreatePostCard from './CreatePostCard'
import PostCard from './PostCard'
import { useSelector, useDispatch } from 'react-redux'
import { setArticlesIsLoading } from '../../../redux/actions/actions'
import { useEffect } from 'react'
import { getArticlesAPI } from '../../../redux/actions'

const Center = () => {
  const dispatch = useDispatch();
  const articlesState = useSelector(state=> state.articlesState)
  const {isLoading, articles} = articlesState
  useEffect(() => {
    dispatch(getArticlesAPI())
  }, [])
  
  return (
    <>
    <Stack gap={3}> 
    <CreatePostCard isLoading={isLoading}/>
    {isLoading && <Spinner className='mx-auto' variant="primary"></Spinner>}
    {articles.length === 0 && <p className='text-center'>There is No Posts yet</p> }
    {articles.length > 0 && articles.map(article=> <PostCard key={article.user.date.toDate()} postDetails={article}/>) }
    {/* <PostCard postDetails = {}/>   */}
    
    </Stack>
    </>
  )
}

export default Center