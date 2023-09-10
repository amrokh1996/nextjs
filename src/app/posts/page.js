import Link from 'next/link'
import React from 'react'

export default async function page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    next:{
      revalidate:10,
    }
  })
  const posts = await response.json()

  return (
    <div className='flex flex-wrap justify-center	'>
        {posts?.map(post =>(
          <Link href={`/posts/${post?.id}`}>
          <div className='w-72 h-72 mx-10 border-2 mt-10'>
          <h1 className='bg-red-200'>{post?.title}</h1>
          <h4>{post?.body}</h4>
          </div>
          </Link>
        ))}

    </div>
  )
}
