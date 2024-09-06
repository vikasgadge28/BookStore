import React from 'react'

function Card({item}) {
  return (
    <>
      <div>
        <div className="card mr-5 bg-slate-100 border-1 border-solid hover:shadow-xl hover:scale-105 duration-200 mt-5 mb-5">
          <figure>
            <img
              className="w-full h-60 pt-4 pr-4 pl-4"
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="h-20 text-sm">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline p-3">${item.price}</div>
              <div className="badge badge-outline cursor-pointer p-3 hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card