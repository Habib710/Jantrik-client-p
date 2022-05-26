import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../friebase.init';
import Mydata from './Mydata';
import './Profile/Profile.css'

const Profile = () => {
    const [user] = useAuthState(auth);
    const [education,seteducation]=useState([])
    const [city,setcity]=useState([])
    const [phone,setphone]=useState([])
    const [profile,setprofile]=useState([])

    const [infomation,setinfomation]=useState([]);

    useEffect(() => {
        fetch("http://localhost:3300/profile")
            .then(res => res.json())
            .then(data => setinfomation(data))

    }, [infomation]);

  

    const educations=event=>{
        seteducation(event.target.value)
    }
    const citys=event=>{
        setcity(event.target.value)

    }
    const mobile=event=>{
        setphone(event.target.value)
        
    }
    const linkedin=event=>{
        setprofile(event.target.value)

    }
    const myinfo={education,city,phone,profile};

    const addprofile=event=>{
        event.preventDefault();

        const url=`http://localhost:3300/profile`;
        fetch(url,{

            method:'POST',
            headers:{
                'authorization':`${user.email} ${localStorage.getItem('AccessToken')}`,
                
                'content-type':'application/json'
            },
            body:JSON.stringify(myinfo)
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
        <div>
            <h1 className='my-5'>Welcome To Your  Profile</h1>


            <div className='m-5 py-4 info-div'>
                <h3>{user.displayName}</h3>
                <h5>{user.email}</h5>

                {
                    infomation.map((infor)=>(<Mydata key={infor._id} data={infor}></Mydata>))
                        


                    
                }
                


            </div>
            <div>

            </div>
            <div>
                <h4>Add Your Profile Information</h4>
                <div>
                    <form onSubmit={addprofile} >
                        <input required onBlur={educations} className='profile-input-div' type="text" placeholder=' Your Education' />
                        <input required onBlur={citys} className='profile-input-div' type="text" placeholder='Your City' />
                        <input required onBlur={mobile} className='profile-input-div' type="text" placeholder='Your phone number'/>
                        <input required onBlur={linkedin} className='profile-input-div' type="text" placeholder='LinkedIn profile link'/>
                        <br /> <br />

                        {
                            infomation[0]?
                            <input disabled className='data-form-btn' type="submit" value='Add Now ' /> 
                           
                            
                            :<input className='data-form-btn' type="submit" value='Add Now ' />
                        }
                        {
                            infomation[0] && <input className='data-form-btn' type="submit" value='Update Profile' />
                        }


                    </form>

                </div>
            </div>
            
            
        </div>
    );
};

export default Profile;