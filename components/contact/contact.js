import React from 'react';
import css from './contact.scss';
import MapContainer from '../googleMap/MapContainer';

const contact = (props) => {
  
    return(
      <section >
        <div className='contactBox1'>
          <h4>Have a question or need to make an appointment?</h4>
          <p>Business: 434-421-2378</p>
          <p>Cell: 434-421-2684</p>
        </div>
        <div className='contactBox2'>
        <MapContainer/>
          <p className='salonAddressBox'>Salon Address</p>
          <p>639 W Main St, Danville, VA 24541</p>
          <p>Business: 434-421-2378</p>
          <p>Cell: 434-421-2684</p>
        </div>
      </section>
    )
}

export default contact;