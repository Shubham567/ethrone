import React from 'react';
import Image from "next/image";
import Cart from "../Cart";
import BWImage from "../BWImage";
import withCartDataInjector from "../../store/dataInjectors/withCartDataInjector";
import {BiSearchAlt} from "react-icons/bi";
import {useRouter} from "next/router";
import Link from "next/link";

const TopNav = () => {

  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const search = e.target.query.value;
    if(!search) {
      return;
    }
    e.target.query.value = "";
    router.push({ pathname: "/search", query: { q: search , p: 1} });
  }

  const handleLoseFocus = (e) => {
    e.target.value = "";
  }

  return (
    <div className="navbar bg-black sticky top-0 z-50">
      <div className="flex-1">
        <Link className="normal-case text-xl" href="/" passHref>
          <div className="color pl-0 md:pl-2 flex text-3xl gap-2 items-center cursor-pointer">
            <Image src="/throne.jpg" alt="box" width={50} height={50} unoptimized={true} />
            <h1 className="text-3xl hidden sm:block font-thin text-white uppercase">nETHer</h1>
          </div>
        </Link>
      </div>

      <div className="flex relative">
        <form onSubmit={handleFormSubmit} onBlur={handleLoseFocus}>
          <input type="search"
                 placeholder="Search items"
                 name="query"
                 className="input input-ghost h-10 input-sm md:input-md max-w-xs rounded-none"/>
          <button type="submit"
                  className="absolute right-0 md:top-0.5 p-2"
                  aria-label="Search">
            <BiSearchAlt className="text-3xl text-black" />
          </button>
        </form>
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
