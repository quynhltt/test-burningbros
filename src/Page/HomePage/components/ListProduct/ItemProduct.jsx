import React from 'react';
import './itemProduct.css';
import { Card } from 'antd';

export default function ItemProduct({ data }) {
  console.log("🚀 ~ ItemProduct ~ data:", data)
  let { title, thumbnail, price, rating, description
  } = data
  return (
    <div className='w-full item-product'>
      <Card
        hoverable
        style={{
          width: '100%',
        }}
        cover={<img alt="example" src={thumbnail} className='h-full object-cover' />}
      >
        <div className="card-content space-y-3">
          <h3 className='font-semibold text-lg'>{title}</h3>
          <p className='text-gray-500 truncate'>{description}</p>
          <h4 className='space-x-1 text-base'>
            <span><i className="fa-solid fa-dollar-sign"></i></span>
            <span className='font-medium'>{price}</span>
          </h4>
          <p className='space-x-1'>
            <i className="fa-solid fa-star text-yellow-300"></i>
            <span>{rating}</span>
          </p>
        </div>
      </Card>
    </div>
  )
}
