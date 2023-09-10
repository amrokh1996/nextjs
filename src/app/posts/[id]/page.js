import Postdetails from '@/components/Postdetails'
import React, { Suspense } from 'react'

export default async function page(props) {
const id =props.params.id
  return (
    <div>
        <h1>post deails</h1>
<Suspense fallback={<h>Loading amro ...</h>}>
    <Postdetails id={id}/>
    </Suspense>
    </div>
  )
}
