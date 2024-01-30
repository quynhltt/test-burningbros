import React from 'react';
import './itemProduct.css';
import { Card } from 'antd';

export default function ItemProduct({ data }) {
  let { title, thumbnail, price, rating } = data
  return (
    <div className='w-full item-product'>
      <Card
        hoverable
        style={{
          width: '100%',
        }}
        cover={<img alt="example" src={thumbnail} className='h-60 object-cover object-top' />}
      >
        <h3>{title}</h3>
        <p>${price}</p>
        <p>{rating}</p>
      </Card>
    </div>
  )
}
