import React from 'react'
import { useSelector } from 'react-redux'

function Home({ classname=""}) {

  const user = useSelector(state=> state.auth)
  console.log(user);
  return (
    <div className={`${classname}`}>
      {user?.email} :- { user?.position}
    </div>
  )
}

export default Home