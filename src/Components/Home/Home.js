import React, { useEffect, useState } from 'react';
import './Home.css';
import 'animate.css';
import Toolcard from './Toolcard';
import { CountUp } from 'use-count-up';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills, faStar, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const [tools,settools]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>settools(data))


    },[])

    const onComplete = () => {
        // do your stuff here
        return { shouldRepeat: 1, delay:3 }
      }
    
      
      const MyComponent = () => <CountUp  isCounting end={120}  duration={5.2} onComplete={onComplete}   />
      const MyComponent2 = () => <CountUp  isCounting end={130}  duration={5.2} onComplete={onComplete}   />
      const MyComponent3 = () => <CountUp  isCounting end={47}  duration={5.2} onComplete={onComplete}   />
      const MyComponent4 = () => <CountUp  isCounting end={12}  duration={5.2} onComplete={onComplete}   />
      


    return (
        <div>
        <div className='baner-css banner-heading'>
            <div className=' style-css'>
            <h1 className='animate__animated animate__fadeInRight  animate__slow 3s '>Welcome to <span className='Header-span'>JAN</span>TRIK</h1>
            <h2 className='animate__animated animate__fadeInUpBig animate__slow 3s'>Hand Tools
             Circular Saw & Power Saw</h2>
             <br />
             <button className='btn btn-css animate__animated animate__fadeInUpBig animate__slow 3s'>Laern More</button>

            </div>
           
            
        </div>

         <section className='tools-section text-center my-5 p-4'>
                <h1 className=''>Tools</h1>
                <div className='map-css my-5 p-1'>
                {
                    tools.map(tool=><Toolcard key={tool._id} data={tool}></Toolcard>)

                }
                </div>


            </section>
            <section className='my-5 '>
                <h1 className='text-center mb-5 '>Business Summary</h1>
                <div className='back-css'>
                <div className='counter-main-div container py-5'>
                <div className=' counter-div'>
                  <h1 ><FontAwesomeIcon className='mt-4 me-2' icon={faUsers} />
                    {MyComponent()}
                   </h1>
                  <h4>we served customers</h4>
                </div>
                <div className=' counter-div'>
                  <h1><FontAwesomeIcon className='mt-4 me-2' icon={faMoneyBills} />
                  {MyComponent2()}M+ </h1>
                  <h4>Annual revenue</h4>
                </div>
                <div className=' counter-div'>
                  <h1><FontAwesomeIcon className='mt-4 me-2' icon={faStar} />  {MyComponent3()}K+</h1>
                  <h4> Reviews</h4>
                </div>
                <div className=' counter-div'>
                  <h1><FontAwesomeIcon className='mt-4 me-2' icon={faTools} /> {MyComponent4()}+</h1>
                  <h4>Tools</h4>
                </div>
                </div>
                </div>


            </section>
            
        </div>
    );
};

export default Home;