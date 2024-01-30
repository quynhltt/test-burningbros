import React from 'react'
import { useSelector } from 'react-redux'
import { localUserServ } from '../../service/localService';
import { NavLink } from 'react-router-dom';

export default function UserMenu() {
  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo;
  })
// null => false
// {} => true
  let handleLogout = () => {
    localUserServ.remove();
    //window.location.href = "/login" // khi đã đăng xuất thì chuyển về trang login
    window.location.reload(); // khi trang reload, redux se tự chạy lại đồng nghĩa vs userInfo lúc này sẽ là null vì đã localUserServ.remove() ở dòng 13
  };
  let renderContent = () => {
    if (userInfo) {
        return (
            <>
                <span>{userInfo.hoTen}</span>
                <button onClick={handleLogout} className='px-5 py-2 rounded border-black border-2'>Đăng xuất</button>
            </>
        );
    }
    else {
        return (
            <>
                <NavLink to={"/login"}>
                    <button className='px-5 py-2 rounded border-black border-2'>Đăng nhập</button>
                </NavLink>
                <button className='px-5 py-2 rounded border-black border-2'>Đăng ký</button>
            </>
        );
    }
  }
  
  return (
    <div className='space-x-5'>{renderContent()}</div>
  )
}
