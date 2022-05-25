import React, { useEffect, useState } from 'react'
import './Home.css'
import 'animate.css'
import Toolcard from './Toolcard'
import { CountUp } from 'use-count-up'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoneyBills,
  faStar,
  faTools,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import Review from '../Reviews/Review'
import img1 from '../../img/1.webp'
import img2 from '../../img/2.webp'
import img3 from '../../img/3.webp'
import img4 from '../../img/4.webp'
import big from '../../img/tab-banner.webp'
import work from '../../img/2 (1).webp'
import work2 from '../../img/1 (3).webp'

const Home = () => {
  const [tools, settools] = useState([])

  useEffect(() => {
    fetch('http://localhost:3300/alltool')
      .then((res) => res.json())
      .then((data) => settools(data))
  }, [])

  // reviews.....................
  const [reviews, setreviews] = useState([])
  useEffect(() => {
    fetch('review.json')
      .then((res) => res.json())
      .then((data) => setreviews(data))
  }, [])

  const onComplete = () => {
    // do your stuff here
    return { shouldRepeat: 1, delay: 3 }
  }

  const MyComponent = () => (
    <CountUp isCounting end={120} duration={5.2} onComplete={onComplete} />
  )
  const MyComponent2 = () => (
    <CountUp isCounting end={130} duration={5.2} onComplete={onComplete} />
  )
  const MyComponent3 = () => (
    <CountUp isCounting end={47} duration={5.2} onComplete={onComplete} />
  )
  const MyComponent4 = () => (
    <CountUp isCounting end={12} duration={5.2} onComplete={onComplete} />
  )

  return (
    <div>
      <div className="baner-css banner-heading">
        <div className=" style-css">
          <h1 className="animate__animated animate__fadeInRight  animate__slow 3s ">
            Welcome to <span className="Header-span">JAN</span>TRIK
          </h1>
          <h2 className="animate__animated animate__fadeInUpBig animate__slow 3s">
            Hand Tools Circular Saw & Power Saw
          </h2>
          <br />
          <button className="btn btn-css animate__animated animate__fadeInUpBig animate__slow 3s">
            Laern More
          </button>
        </div>
      </div>

      <section className="tools-section text-center my-5 p-4">
        <h1 className="">Tools</h1>
        <div className="map-css my-5 p-1">
          {tools.map((tool) => (
            <Toolcard key={tool._id} data={tool}></Toolcard>
          ))}
        </div>
      </section>
      <section className="my-5 ">
        <h1 className="text-center mb-5 ">Business Summary</h1>
        <div className="back-css">
          <div className="counter-main-div container py-5">
            <div className=" counter-div">
              <h1>
                <FontAwesomeIcon className="mt-4 me-2" icon={faUsers} />
                {MyComponent()}
              </h1>
              <h4>we served customers</h4>
            </div>
            <div className=" counter-div">
              <h1>
                <FontAwesomeIcon className="mt-4 me-2" icon={faMoneyBills} />
                {MyComponent2()}M+{' '}
              </h1>
              <h4>Annual revenue</h4>
            </div>
            <div className=" counter-div">
              <h1>
                <FontAwesomeIcon className="mt-4 me-2" icon={faStar} />{' '}
                {MyComponent3()}K+
              </h1>
              <h4> Reviews</h4>
            </div>
            <div className=" counter-div">
              <h1>
                <FontAwesomeIcon className="mt-4 me-2" icon={faTools} />{' '}
                {MyComponent4()}+
              </h1>
              <h4>Tools</h4>
            </div>
          </div>
        </div>
      </section>
      

      <h1 className="text-center">Reviews</h1>
      <section className="reviews-css my-5 p-3">
        <div className="review-div container my-5 lg-p-5">
          {reviews.map((review) => (
            <Review key={review._id} data={review}></Review>
          ))}
        </div>
      </section>
      <section>
        <img width='100%' src={big} alt="" />


      </section>
      {/* our service................ */}
      <section className="text-center my-3">
        <h1 className="text-center py-5">Our Extra Services</h1>
        <div className='services-div'>
          <div className=''>
            <img width='10%'  src={img1} alt="img" />
            <div className='my-3'>
              <h4>FREE DELIVERY</h4>
              <p>Free shipping on all order</p>
            </div>
          </div>
          <div>
            <img width='10%' src={img2} alt="img" />
            <div className='my-3'>
              <h4>ONLINE SUPPORT 24/7</h4>
              <p>Support online 24 hours</p>
            </div>
          </div>
          <div>
            <img width='10%' src={img3} alt="img" />
            <div className='my-3'>
              <h4>MONEY RETURN</h4>
              <p>Back guarantee under 7 days</p>
            </div>
          </div>
          <div>
            <img width='10%' src={img4} alt="img" />
            <div className='my-3'>
              <h4>MEMBER DISCOUNT</h4>
              <p>Onevery order over $30.00</p>
            </div>
          </div>
        </div>
      </section>
      {/* last section on home pages */}
      <section className='container  my-5 py-3'>
       <h1 className='text-center'> JANTRIK RESPON</h1>
        <div className='custom-css-lastdiv'>
          <div className='p-5 p-div'>
            <p className=''>Jantrik consectetur adipisicing elit. Rerum ea commodi, sed aliquam id recusandae ex alias quis, officiis ut quae magnam. Porro quod incidunt nesciunt, pariatur vitae at veritatis.officiis ut quae  quod incidunt nesciunt, pariatur vitae at veritatisofficiis ut quae magnam. quod incidunt nesciunt, pariatur vitae at veritatisofficiis ut quae magnam.  nesciunt, pariatur vitae at veritatisofficiis ut quae magnam. , pariatur vitae at veritatisofficiis ut quae magnam. Porro quod incidunt nesciunt, pariatur vitae at veritatis</p>
            <div className='custom-css-lastdiv '>
            <img className='m-2' width='100%'  src={work} alt="" />
            <img  className='m-2' width='100%'  src={work2} alt="" />

          </div>
         

          </div>
         
        </div>
      </section>
     
    </div>
  )
}

export default Home
