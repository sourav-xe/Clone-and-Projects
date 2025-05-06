import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'


function PostCard({$id, title, content, Images,}) {
  return (
   <Link to={`/post/${$id}`} className='w-full'>
    <div className='w-full bg-gray-100 rounded-xl px-4'>
        <div className='w-full justify-center mb-439'>
    <img src={appwriteService.getFilePreview(Images)} alt={title} className='rounded-xl'  />
    </div>
        <h2 className='text-xl font-bold'>
            {title}
        </h2>
    </div>
   </Link> 
  )
}

export default PostCard
