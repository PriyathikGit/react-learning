import { useParams } from "react-router-dom"


function User() {
   const {id} =  useParams()
  return (
    <div className="text-center bg-gray-500 p-4 text-white text-3xl max-w-full">User:{id}</div>
  )
}

export default User