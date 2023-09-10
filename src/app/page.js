import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
<div>
<Link href='/posts'>
        <button className='bg-red-300 px-10'>take me to posts</button>
        </Link>
</div>
  )
}
