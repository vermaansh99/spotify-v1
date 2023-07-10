import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function authenticate() {
    const router = useRouter()

    const {query} = router;

    console.log(query)
    useEffect(()=>{
        if(query.access_token && query.refresh_token) {
            window.localStorage.setItem('access_token',query.access_token)
            window.localStorage.setItem('refresh_token',query.refresh_token)
        }
        router.push('/')
    },[router])
  return (
    <div>authenticate</div>
  )
}

export default authenticate