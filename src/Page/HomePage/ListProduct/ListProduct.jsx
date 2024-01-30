import React, { useEffect, useState } from 'react'
import { userServ } from '../../../service/userService'
import ItemProduct from './ItemProduct'

export default function ListProduct() {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    fetchAllProduct()
  }, [])
  let fetchAllProduct = () => {
    userServ.getAllProduct()
      .then((res) => {
        setProductList(res.data.products)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='container grid grid-cols-4 gap-5'>
      {productList.map((item) => {
        return <ItemProduct key={item.id} data={item} />
      })}
    </div>
  )
}
