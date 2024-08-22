import React,{useState,useEffect} from 'react'
import service from '../appwrite/config'
import { Container,PostCard } from '../components'
function AllPosts() {
    const [post, setPost] = useState([])
    useEffect(()=>{},[])
    service.getPosts([]).then((post)=>{
        if(post) {
            setPost(post.documents)
            }
        })
  return (
    <div className='py-8 w-full'>
        <Container>
            <div className='flex flex-wrap'>
                {post.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts