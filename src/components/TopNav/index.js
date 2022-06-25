import React from 'react';
import Image from "next/image";
import Cart from "../Cart";
import BWImage from "../BWImage";
import withCartDataInjector from "../../store/dataInjectors/withCartDataInjector";

const TopNav = () => {
  return (
    <div className="navbar bg-black">
      <div className="flex-1">
        <a className="normal-case text-xl">
          <div className="color pl-2 flex text-3xl gap-2 items-center">
            <Image src="/throne.jpg" alt="box" width={50} height={50} unoptimized={true} />
            <h1 className="text-3xl font-thin text-white uppercase">nETHer</h1>
          </div>
        </a>
      </div>

        <CartWithData />

        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <BWImage src="https://api.lorem.space/image/face?hash=33791" width={30} height={30}/>
            </div>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
  );
};

const CartWithData = withCartDataInjector(Cart);

export default TopNav;
