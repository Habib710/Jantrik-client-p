import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import auth from '../../friebase.init'

import './Purchase.css'

const Purchase = () => {
  const { id } = useParams()
  const [user] = useAuthState(auth)

  const [item, setitem] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3300/alltool/${id}`)
      .then((res) => res.json())
      .then((data) => setitem(data))
  }, [id])

  const { name, price, available, minimum } = item

  const [quantity, setquantity] = useState(2000)
  const [newprice, setnewprice] = useState([])
  const [final, setfinal] = useState(2000)
  const [error1, seterror1] = useState([])

  const increase = (event) => {
    event.preventDefault()
    const newvlaue = event.target.increase.value
    const myorder = quantity + parseInt(newvlaue)
    if (myorder > available) {
      return seterror1('You can not order more than available unit')
    }

    setquantity(myorder)
    seterror1(' ')

    event.target.reset()
  }

  const decrease = (event) => {
    event.preventDefault()
    const newvlaue = event.target.decrease.value
    const myorder = quantity - parseInt(newvlaue)
    if (myorder < minimum) {
      return seterror1('You can not order less than minimum unit')
    }
    setquantity(myorder)
    seterror1(' ')

    event.target.reset()
  }
  const orderset = () => {
    setfinal(quantity)
    const total = quantity * price
    setnewprice(total)
  }
  const [email1, setemail1] = useState([])
  const [tool1, settool1] = useState([])
  const [price1, setprice1] = useState([])
  const [quantity1, setquantity1] = useState([])
  const [address1, setaddress1] = useState([])
  const [user1, setuser1] = useState([])
  const [phone1, setphone1] = useState([])

  const Myorders = { email1, tool1, price1, quantity1, address1, user1, phone1 }

  const submited = (event) => {
    event.preventDefault()

    setemail1(user?.email)
    settool1(event.target.tool?.value)
    setprice1(event.target.price?.value)
    setaddress1(event.target.address?.value)
    setquantity1(event.target.quantity?.value)
    setuser1(user?.displayName)
    setphone1(event.target.phone?.value)
  }

  const uptodate = () => {
    fetch(`http://localhost:3300/orders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify(Myorders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })

    Swal.fire('Thank You', 'Your Order Completed Successfully ', 'success')
  }

  return (
    <div className="p-3">
      <div className="text-center py-5">
        <h3>Name : {user.displayName}</h3>
        <h5>Email : {user.email}</h5>
      </div>
      <div className="main-div-css">
        <div className="dtails-div text-center">
          <h2>Tool's Name : {name}</h2>
          <h4>Price : ${price} /per unit</h4>
          <h4>Abailable : {available} unit</h4>
          <h3>Your Order : {quantity} unit</h3>
          <br />

          <h5>Change your order quantity </h5>
          <br />
          <form onSubmit={increase}>
            <input className="input-css" name="increase" type="number" />

            <input type="submit" value="Increase" className="btn-quntity" />
          </form>
          <br />

          <form onSubmit={decrease}>
            <input className="input-css" name="decrease" type="number" />

            <input type="submit" value="Decrease" className="btn-quntity" />
          </form>

          <h4 className="text-danger">{error1}</h4>
          <br />
          <br />

          {error1.length > 1 ? (
            <button disabled className="btn-quntity">
              Set Order
            </button>
          ) : (
            <button onClick={orderset} className="btn-quntity">
              Update Order
            </button>
          )}
        </div>

        <div className="dtails-div">
          <div>
            <h1>Your Order</h1>

            <h3>Tool's Name : {name}</h3>
            <h3>Quantity : {final} unit</h3>

            <h3>Total Price: $ {newprice}</h3>
          </div>

          <div className="text-center my-5">
            <form className="" onSubmit={submited}>
              <label>Name </label>
              <br />
              <input
                disabled
                className="data-form"
                value={user?.displayName}
                name="user"
                type="text"
              />
              <br />
              <label>Email </label>
              <br />
              <input
                disabled
                className="data-form"
                value={user?.email}
                name="email"
                type="email"
              />
              <br />
              <label className="text-left">Tool's </label>
              <br />
              <input
                disabled
                className="data-form"
                value={name}
                name="tool"
                type="text"
              />
              <br />
              <label>Quantity </label>
              <br />

              <input
                disabled
                className="data-form"
                value={final}
                name="quantity"
                type="number"
              />
              <br />
              <label>Total Price </label>
              <br />
              <input
                required
                className="data-form"
                value={newprice}
                name="price"
                placeholder="Total Price ( Click Update Order)"
                type="number"
              />
              <br />
              <label>Address </label>
              <br />

              <input
                required
                className="data-form"
                type="text"
                name="address"
                placeholder="Your Address"
              />
              <br />
              <label>Phone </label>
              <br />
              <input
                required
                className="data-form"
                type="number"
                name="phone"
                placeholder="Your Mobile Number"
              />
              <br />
              <br />
              <input
                className="submit-btn-css text-center"
                value="Set Order "
                type="submit"
              />
              <br />
              {Myorders.email1.length > 2 ? (
                <button className="data-form-btn" onClick={uptodate}>
                  Confirm Order
                </button>
              ) : (
                <button disabled className="data-form-btn" onClick={uptodate}>
                  Confirm Order
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase
