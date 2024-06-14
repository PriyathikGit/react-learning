import React, { useEffect, useState } from 'react'


function GIthub() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/kunal-kushwaha")
        .then(response=>response.json())
        .then((response)=>{
            console.log(response)
            setData(response)
        })
    },[])
  return (
    <>
    <div className='m-4 bg-gray-500 text-white p-4 text-3xl flex'>
    <img src={data.avatar_url} />
    {data.followers}
    </div>
    </>
  )
}

export default GIthub

