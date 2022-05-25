import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import {   useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../friebase.init';
import { faEnvelope, faLock, faUser,   } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';
import 'animate.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate=useNavigate();

    const [email,setemail]=useState([]);
    const [password,setpassword]=useState([]);
    const [conpass,setconpass]=useState([]);
    const [errors,seterrors]=useState([]);
    const [semail,setsemail]=useState([]);
    const [spassword,setspassword]=useState([]);
   

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle,user1] = useSignInWithGoogle(auth);

      const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );
      const [user0] = useAuthState(auth);
     

    const semailhendle=event=>{
        setsemail(event.target.value);
        

    }
    const emailhendle=event=>{
        setemail(event.target.value);
        

    }
   
    const NameHendle =event=>{
        console.log(event.target.value);
    }
    const spasswordhendle=event=>{
       setspassword(event.target.value);
       
    }
    const passwordhendle=event=>{
       setpassword(event.target.value);
       
    }
    const conpasshendle=event=>{
        setconpass(event.target.value);
    }
    const login=event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    const onsubmit=event=>{
        event.preventDefault()
        if(spassword !==conpass){
            return seterrors("Your two password didn't match")
        }
        if(spassword<6){
            return seterrors('Password must be more then 6 number/letter')
        }
        console.log(semail ,spassword);

        createUserWithEmailAndPassword(auth,semail, spassword)


    }
    if(loading){
        return <Loading></Loading>
    }
    

    if(user0 ||user1){
  
      navigate(from, { replace: true });
// ok messeage..........
        Swal.fire({
            icon:'success',
            title: 'Login Success  ',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })

          
          
        
        
    }
    const idlogin=()=>{
        document.getElementById('login').style.display="block";
        document.getElementById('signin').style.display='none';
       
              
    }
    const  idsignin=()=>{
      
        document.getElementById('login').style.display="none";
        document.getElementById('signin').style.display='block';
       
       

    }
    
    



    return (
        <div className='login-main-div py-5 px-2'>
            <div className='button-div-css'>
                <button onClick={idlogin}>login</button>
                <button onClick={idsignin}>sign up</button>
                
                
                

            </div>
           <section className='d-flex'>

            <div id='login' className=' container  form-custom-css'>
            
            <Form onSubmit={login} className='formss-input-css'>
            <h3>Login</h3>
                <div className='inputss-css'>


                <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faEnvelope} /> 
                 <input onBlur={emailhendle} type="email"  placeholder=' Your Email'/></span>


                 <span className='d-flex align-items-center  justify-content '><FontAwesomeIcon className='mt-4 me-2' icon={faLock} /> 
               <input onBlur={passwordhendle} type="password"   placeholder=' Your Password' required/></span>


               </div>
               
               {
                   error?  <p className='text-danger'>Not found</p>:''
               }
               
               <br /><br />
               <input className='submit-css' type="submit" value='Login' />
               
              
               </Form>
               <p>New To Jantrik ? <button className='btn' onClick={idsignin}>sign up</button></p>
               <p>Forget password ? <button onClick={async () => {
                   if(email.length<3){
                       return (Swal.fire({
                        
                        title: 'Valid Email Must be Needed',
                        text:'Input  Email Please'
                    
                      }))
                   }
          await sendPasswordResetEmail(email);
          toast("Email sending");}} className='btn text-primary'> Reset password</button> </p>
          <ToastContainer />
              
               OR
               <br />
              
               <button  onClick={()=>signInWithGoogle()} className='google-css mb-4'>Sign in With Google</button>
               
           
        </div>



        <div id='signin'  className='  container singup-custom  form-custom-css '>
            
            <Form onSubmit={onsubmit} className='formss-input-css'>
            <h3>Sign Up</h3>
                <div className='inputss-css'>
                <span className='d-flex align-items-center   '><FontAwesomeIcon className='mt-4 me-2' icon={faUser} /> 
                 <input onBlur={NameHendle} type="text" placeholder=' Your Name'/></span>

                <span className='d-flex align-items-center  '><FontAwesomeIcon className='mt-4 me-2' icon={faEnvelope} /> 
                 <input onBlur={semailhendle} type="email"  placeholder=' Your Email'/></span>

                 <span className='d-flex align-items-center  nt '><FontAwesomeIcon className='mt-4 me-2' icon={faLock} /> 
               <input onBlur={spasswordhendle} type="password"   placeholder=' Your Password'/></span>
               

                 <span className='d-flex align-items-center   '><FontAwesomeIcon className='mt-4 me-2' icon={faLock} /> 
               <input onBlur={conpasshendle} type="conpassword"  placeholder='Confrim Your Password'/></span>
               </div><br />
               <h6 className='text-danger'>{
                   errors?errors:''
                   }
                   {
                       error?error:''

                   }
                   
                   
                   </h6>
               
               
               <input className='submit-css w-50' type="submit" value='Sing Up' />
               <br />
               <br />
               <p>Have an account ?<button className='btn' onClick={idlogin}>login</button></p>
            
              
               OR
              
               <br />
               <button onClick={()=>signInWithGoogle()} className='google-css w-50'>Sign in With Google</button>
               
           </Form>
        </div>
        </section>
    
        </div>
    );
};

export default Login;