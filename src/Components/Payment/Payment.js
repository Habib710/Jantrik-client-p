import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CheckoutForm from './CheckoutForm'
const stripePromise = loadStripe(
  'pk_test_51L3fhKFVSvlfvjtm9n4YODwKMp66FgWFPFf68GJ2f0TdCIaQJoowhm0MynyH3BoSXwqGRiTneQORqHH8JiGVKnh3006HHvoKSN',
)

const Payment = () => {
  const { ids } = useParams()

  const [Item, setitem] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3300/orders/${ids}`)
      .then((res) => res.json())
      .then((data) => setitem(data))
  }, [ids])
  console.log(Item)
  return (
    <div className="text-center my-5">
      <h1 className="my-5 ">Welcome to Payment</h1>
      <div className="p-3 ">
        <h3> Tool Name: {Item.tool1}</h3>
        <h4>Quantity : {Item.quantity1} Units</h4>
        <h4>Have to Pay : $ {Item.price1}</h4>
      </div>    
      <div className='container newpaymentcss'>
        <Elements stripe={stripePromise}>
          <CheckoutForm  data={Item}/>
        </Elements>
      </div>
    </div>
  )
}

export default Payment
