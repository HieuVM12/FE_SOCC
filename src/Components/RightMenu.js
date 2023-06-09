import React from "react";
import "../styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile from "../img/profile.jpg";
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';

function RightMenu({userProfile}) {

  const username=localStorage.getItem("username");
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const dangXuat = () => {
    console.log("Ok");
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  const dangNhap = () =>{
    navigate("/login");
    window.location.reload();
  }

  return (
    <div className="rightContainer">
      <div className="goPro">
        <i>
          <FaCrown />
          <p>
            <span> Go</span>Pro
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        {/* <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i> */}
        {accessToken ? (<span onClick={dangXuat}>Đăng xuất</span>):(<div></div>)}

        <div className="profileImage">
          {accessToken!=null && userProfile ? (<span>{userProfile.username}</span>):(<span onClick={dangNhap}>Đăng nhập</span>)}
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
