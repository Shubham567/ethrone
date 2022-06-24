import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import Image from "next/image";

import { BiSearchAlt } from "react-icons/bi";
import Cart from "../Cart";

const TopNac = props => {
  return (
    <nav className={clsx("flex w-full sticky top-0 items-center justify-between bg-black pb-1")}>
      <div className="color pl-2 flex text-3xl gap-2 items-center">
        <Image src="/throne.jpg" alt="box" width={50} height={50} unoptimized={true} />
        <h1 className="text-3xl font-thin text-white uppercase">EThrone</h1>
      </div>

      <div className="flex relative">
        <form>
          <input type="text"
                 placeholder="Search for items"
                 className="input input-ghost h-10 input-lg w-full w-full max-w-xs rounded-none"/>
            <button type="submit"
                    className="absolute right-0 top-0.5 p-1"
                    aria-label="Search">
              <BiSearchAlt className="text-3xl text-black" />
            </button>
        </form>
      </div>

      <div>
        <Cart />
      </div>
    </nav>
  );
};

TopNac.propTypes = {

};

export default TopNac;
