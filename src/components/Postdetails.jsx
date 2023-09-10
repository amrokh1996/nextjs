import React from 'react'

export default async function Postdetails(props) {
    const id = props.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next:{
          revalidate:100,
        }
      })
      const post = await response.json()
  return (
   
        <div className='w-72 h-72 mx-10 border-2 mt-10'>
          <h1 className='bg-red-200'>{post?.title}</h1>
          <h4>{post?.body}</h4>
        </div>

  )
}
