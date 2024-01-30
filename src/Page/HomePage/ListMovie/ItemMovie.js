import React from 'react'
import { Button, Card } from 'antd';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

export default function ItemMovie({data}) {
  return (
    <Card
      hoverable
      style={{
        width: "100%",
      }}
      cover={<img className='h-80 object-cover object-top' alt="example" src={data.hinhAnh}/>}
    >
      <Meta title={data.tenPhim}/>
      <NavLink to={`/detail/${data.maPhim}`}>
        <Button danger type='primary'>Xem ngay</Button>
      </NavLink>
      
    </Card>
  )
}
