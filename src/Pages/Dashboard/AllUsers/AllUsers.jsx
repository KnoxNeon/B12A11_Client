import React, { useContext, useEffect, useState } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { AuthContext } from '../../../Provider/AuthProvider'

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const [users, setUsers] = useState([])
    

    useEffect(()=>{
        
        axiosSecure.get('/users')
        .then(res =>{
            setUsers(res.data)
        })
    },[axiosSecure])

    console.log(users)

  return (
    <div className="overflow-x-auto">
      <title>My Orders</title>
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Blood Type</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user=>
        <tr>
        <td></td>
        <td><img src={user?.mainPhotoUrl} className='w-10 h-10' alt="" /></td>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.blood}</td>
        <td>{user?.role}</td>
        <td>{user?.status}</td>
        
        <td>
            {
               new Date(user?.date).toLocaleString('en-us', {
                    year: 'numeric',
                    month:'short',
                    day:'numeric',
                    hour:'numeric',
                    minute:'numeric',
                    hour12: true
                
                })}
        </td>
      </tr>

        )
      }
      </tbody> 
  </table>
</div>
  )
}

export default AllUsers
