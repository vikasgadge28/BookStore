import React from 'react'
import banner from '../assets/Banner.png'

const Banner = () => {
  return (
    <>
      <div className="bg-blue-100 max-w-screen-2xl container mx-auto md:px-10 px-4 flex flex-col md:flex-row ">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something <span className="text-blue-500">new everyday!!!</span>
            </h1>
            <p className="text-base font">
              Discover something new every day with our diverse collection of
              books. Dive into different genres, find your next great read, and
              explore our latest arrivals and bestsellers.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className=" bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-slate-800 duration-300 cursor-pointer mt-6">
            Login
          </button>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img
            src={banner}
            className="ml-10 mt-9 w-[70%] md:w-[90%] md:h-[90%]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner