import React from 'react'
import PrimaryButton from '../components/button/PrimaryButton'

const Home = () => {
  return (
    <div>
      <PrimaryButton handler={() => alert('Button clicked')} classes={'px-5 py-2 rounded'}>Home</PrimaryButton>
    </div>
  )
};

export default Home;