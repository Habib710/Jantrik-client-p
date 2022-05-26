import { CardElement,  useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import './payment.css'
import Swal from 'sweetalert2';

const CheckoutForm = (props) => {
    const {price1,tool1}=props.data;
    
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret,setclint]=useState(' ');
  const tools = {price1};
  useEffect(()=>{
      fetch('https://frozen-lowlands-11612.herokuapp.com/payment-inten',{
          method:'POST',
          headers:{
            'content-type':'application/json'


        },body: JSON.stringify(tools)


      })
      .then(res=>res.json())
      .then(data=>{
          if(data?.clientSecret){
              setclint(data.clientSecret);
          }



      })


  },[tools])

    const handleSubmit = async(event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          
          return
        }

        

        const card = elements.getElement(CardElement);

        if (card == null) {
            return ;
          }
          


          const  {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          };

          const {paymentIntent,error1 } = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: {tool1},
                },
              },
            },
          );
          if(paymentIntent){
          Swal.fire({
            icon: 'success',
            title: 'Great ! ',
            text: 'YOUR Payment compeleted',
          
          })}
          console.log(error1);

          console.log(paymentIntent);
        }
        
      

        

    
        

    return (
        <form className='card-froms' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btnmycss  my-5' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    );
    
    };

export default CheckoutForm;