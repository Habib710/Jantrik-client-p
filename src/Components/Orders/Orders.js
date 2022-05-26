import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import {  Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import auth from '../../friebase.init'
import './order.css'

const Orders = () => {
 
  const [user] = useAuthState(auth)
  

  const [myorders, setmyorders] = useState([])
  useEffect(() => {
    fetch('http://localhost:3300/orders')
      .then((res) => res.json())
      .then((data) => {
        const mydata = data.filter((myitem) => myitem.email1 === user?.email)

        setmyorders(mydata)
      })
  }, [user?.email]);
  const naviget=useNavigate();

  const deleted = (id) => {
    Swal.fire({
      title: 'Are you sure to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:3300/orders/${id}`
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            const remain = myorders.filter((myorder) => myorder._id !== id)
            setmyorders(remain)
          })

        Swal.fire('Deleted!', 'Ihis Item has been deleted.', 'success')
      }
    })
  }
  const delivery=id=>{
    naviget(`/payment/${id}`)
    
    
  }

 
  

  return (
    <div className='orderdiv'>
      <h1 className="my-5">Orders Details</h1>

      {myorders.map((myorder) => {
        return (
          <div className="m-3">
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>{}</td>
                  <td className='p-lg-2'>
                    <h4>
                      Tool : {myorder.tool1} <br />
                      Qiantity : {myorder.quantity1} Units <br />
                      Total price : $ {myorder.price1}
                    </h4>
                  </td>
                  <td className="p-lg-5">
                  
                  <button className='payment-css-btn' onClick={() => delivery(myorder._id)} >
                      pament
                    </button>

                  </td>
                  <td className="delete-btn-css-order p-lg-5 ">
                    <button onClick={() => deleted(myorder._id)} >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div>
             
            </div>

          </div>
        )
      })}
      
    </div>
  )
}

export default Orders
