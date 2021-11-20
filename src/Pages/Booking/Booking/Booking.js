import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService] = useState({});

    useEffect( () => {
        fetch(`https://pure-tundra-89949.herokuapp.com/services/${serviceId}`)
        .then((response) => response.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h2>Booking Details of {service.name}</h2> 
            <h4>this is booking: {serviceId}</h4>
        </div>
    );
};

export default Booking;