import React from 'react';
import Image from "next/image";
import clsx from "clsx";
import bwImageStyles from "./BWImage.module.css";
import PropTypes from "prop-types";

const BWImage = ({className,imageClassName,effectType="backdropRollCenter",alt,...props}) => {
  return (
    <div className={
      clsx(
        bwImageStyles.bwImage,
        {[bwImageStyles.bwImageEffectRollHorizontalCenter]: effectType === "backdropRollCenter"},
        {[bwImageStyles.bwImageEffectRollUp]: effectType === "backdropRollUp"},
        className)}>
      <Image alt={alt} className={imageClassName} {...props}/>
    </div>
  );
};

BWImage.prototype = {
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  alt: PropTypes.string.required,
  effectType: PropTypes.oneOf(["backDropRollCenter","backDropRollUp"])
}
export default BWImage;
