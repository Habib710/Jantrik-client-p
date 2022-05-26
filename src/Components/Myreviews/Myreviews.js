import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../friebase.init';
import './myreviews.css'

const Myreviews = () => {

    const [user] = useAuthState(auth);


    const [rating,setrating]=useState([]);
    const [about,setabout]=useState([]);
    const [name,setname]=useState(user?.displayName);



    const commentss=event=>{
        setabout(event.target.value);

        
    }
    const ratingss=event=>{
        setrating(event.target.value);


    }
   const newreviews ={rating,about,name};

   const submited=event=>{
    event.preventDefault();
    if(rating>5 || rating<1){

        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Rating should be 1 to 5',
            
          })

    }
    if(about.length<6){
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Comment should be more then 3 words',
            
          })

    }

   
    const url=`https://frozen-lowlands-11612.herokuapp.com/reviews`;
    fetch(url,{

        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newreviews)
    })
    .then(res=>res.json())
    .then(data=>{
       
        Swal.fire({
            icon:'success',
            title: 'Item Added Sucessfuly ',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    })


    event.target.reset();



}


   
    return (
        <div className=''>
            <h1 className='my-5'>Add Your Reviews</h1>
            <div className=' text-center my-div m-auto my-5'>
                <form onSubmit={submited} >
                    <input  className='reviews-input-css' type="text" readOnly value={user.displayName} /> <br /> <br />
                    <input required onBlur={ratingss} className='reviews-input-css' type="number"  placeholder='Your Rating (1-5)' />
                     <br /> <br />
                     <textarea required onBlur={commentss}   className='w-100 text-area-css' placeholder='Your Comments '></textarea>
                    <br /> <br />
                    <input className='data-form-btn' type="submit" value='Add Now' />



                </form>
            </div>
            
        </div>
    );
};

export default Myreviews;