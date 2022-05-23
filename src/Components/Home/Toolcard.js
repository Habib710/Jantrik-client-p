
import React from 'react'
import { Card } from 'react-bootstrap';
import './Home.css';

const Toolcard = (props) => {
  const { name, _id, price, pic, available, minimum, about } = props.data
  return (
    <div className=''>
      <Card className='card-css-div' style={{ width: '100%'}}>
        <Card.Img className='card-img-css' width='100%' height='300px' src={pic} alt="" />
        <Card.Body>
          <h3>{name}</h3>
          <h5>price : {price}$ /per unit</h5>
          <h5>Available : {available} units</h5>
          <h5>Minimum Order : {minimum} units</h5>
          <Card.Text>
            {about}
          </Card.Text>
          <button className='btn btn-css'>Book Now</button>
         
        </Card.Body>
      </Card>
    </div>
  )
}

export default Toolcard
