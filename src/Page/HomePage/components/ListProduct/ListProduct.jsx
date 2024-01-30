import React, { useEffect, useState } from 'react'
import { userServ } from '../../../../service/userService'
import ItemProduct from './ItemProduct'
import { useSelector } from 'react-redux'

export default function ListProduct() {
  const [productList, setProductList] = useState([])
  let productSearch = useSelector(state => state.userReducer.searchVal)

  useEffect(() => {
    fetchAllProduct()
  }, []);

  useEffect(() => {
    setProductList(productSearch)
  }, [productSearch]);

  let fetchAllProduct = () => {
    userServ.getAllProduct()
      .then((res) => {
        setProductList(res.data.products)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  let renderProductList = (list) => {
    return list.map((item) => {
      return <ItemProduct key={item.id} data={item} />
    })
  }

  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {renderProductList(productList)}
    </div>
  )
}
