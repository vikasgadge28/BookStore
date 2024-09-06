import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Courses from '../components/Courses'

const Course = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-blue-1'>
        <Courses />
      </div>
      <Footer />
    </>
  );
}

export default Course