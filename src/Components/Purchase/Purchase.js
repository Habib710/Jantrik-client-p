import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../friebase.init';

import './Purchase.css'

const Purchase = () => {
    const {id}=useParams();
    const [user] = useAuthState(auth);
  
    const [item,
        setitem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3300/alltool/${id}`)
        .then(res => res.json())
        .then(data => setitem(data))

    },[id]);
    
    
    const {name,price, available, minimum}=item;
   
    

    const [ quantity,setquantity]=useState(2000);
    const [ newprice,setnewprice]=useState([]);
    const [final,setfinal]=useState(2000);
    const [error1,seterror1]=useState([])

    const increase=event=>{
        event.preventDefault();
       const newvlaue=event.target.increase.value;
       const myorder=quantity+parseInt(newvlaue) ;
       if(myorder>available){
           return seterror1('You can not order more than available unit')
       }
       
       setquantity(myorder);
       seterror1(' ');

       event.target.reset();

        
    }


    const decrease=event=>{
        event.preventDefault();
       const newvlaue=event.target.decrease.value;
       const myorder=quantity-parseInt(newvlaue) ;
       if(myorder<minimum){
        return seterror1('You can not order less than minimum unit')
    }
       setquantity(myorder);
       seterror1(' ');
      

       event.target.reset();

        
    }
    const orderset=()=>{
        setfinal(quantity);
        const total=quantity*price;
        setnewprice(total);
        


    }
   
   

    
    return (
        <div className='p-3'>
            <div className='text-center py-5'>
                <h3>Name : {user.displayName}</h3>
                <h5>Email : {user.email}</h5>

            </div>
          <div className='d-flex justify-content-around'>

            <div className='dtails-div text-center'>
            <h2>Tool's Name : {name}</h2>
            <h4>Price : ${price} /per unit</h4>
            <h4>Abailable : {available} unit</h4>
            <h3>Your Order : { quantity} unit</h3>
            <br />

            <h5>Change your order quantity </h5>
            <br />
            <form onSubmit={increase}>
            <input className='input-css' name='increase' type="number" />
            
            <input type='submit' value='Increase' className='btn-quntity' />
            </form>
            <br />
            

             <form onSubmit={decrease}>
            <input className='input-css' name='decrease' type="number" />
            
            <input type='submit' value='Decrease' className='btn-quntity' />
            </form>
            
            <h4 className='text-danger'>{error1}</h4>
            <br />
            <br />

            {
            error1.length>1 ? <button disabled    className='btn-quntity'>Set Order</button>:<button onClick={orderset}    className='btn-quntity'>Set Order</button>
            }
                 
            
            
           
           
            </div>

            
          

            <div className='dtails-div'>
                <div>
                    <h1>Your Order</h1>
                <h3>Tool's Name : {name}</h3>
                <h3>Quantity : {final} unit</h3>

                <h3>Total Price: $ {newprice}</h3>

                </div>
                <form >
                    


                </form>

           
            </div>
            

            </div>
           
            
        </div>
    );
};

export default Purchase;