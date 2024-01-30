import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'antd';
import { userServ } from '../../../../service/userService';
import { searchProductAction } from '../../../../redux/action/userAction';

export default function SearchBox() {
  let dispatch = useDispatch()
  let handleOnchange = (value) => {
    userServ.searchProduct(value)
      .then((res) => {
        dispatch(searchProductAction(res.data.products))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Input placeholder="Search product" onChange={(e) => { handleOnchange(e.target.value) }} />
    </div>
  )
}
