import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import Image from "next/image";

const TopNac = props => {
  return (
    <nav className={clsx("flex w-full sticky top-0")}>
      <div className="color pl-2 flex pl-5 text-3xl">
        <Image src="/throne.jpg" alt="box" width={60} height={60} unoptimized={true} />
        <h1 className="">Ethrone</h1>
      </div>
    </nav>
  );
};

TopNac.propTypes = {

};

export default TopNac;
