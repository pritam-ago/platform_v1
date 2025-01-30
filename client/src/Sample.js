import React from 'react';
import api from './services/api';
import { useState, useEffect } from 'react';

const Sample = () => {

  const [dataSample, setDataSample] = useState();

  useEffect(()=> {
    const fetchSample = async () => {
        const response = await api.get('/');
        setDataSample(response.data);
    }
    fetchSample();
  })

  return (
    <div>
    <p>
        {dataSample}
    </p>
    </div>
  )
}

export default Sample;
