import React from 'react'
import Card from '../components/Card'
import list from '../../public/list.json' 
import {Link} from 'react-router-dom'

const Courses = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 bg-blue-100 ">
        <div className="pt-28 item-center text-center justify-center">
          <h1 className="text-2xl md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-blue-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Welcome to{" "}
            <span className="text-blue-500 font-semibold">BookStore</span>, your
            one-stop destination for a world of stories and knowledge. Our
            bookstore project is a haven for book lovers, offering a diverse
            collection of literature that caters to all tastes and interests.
            Whether you’re on the hunt for the latest bestseller, a timeless
            classic, or a hidden gem, PageTurners has you covered.
          </p>
          <Link to='/'>
            <button className=" bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-slate-800 duration-300 cursor-pointer mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses