import React from "react";
import { forwardRef } from "react";

export const CardItem = forwardRef(({ handleChange,handlebackSpace }, ref) => {
  const makeChange=(e)=>{
    if(e.keyCode === 8){
        console.log(e)
        handlebackSpace(e);
    }else{
        handleChange(e);
    }

  }

  return <input ref={ref} maxLength={4} onKeyUp={makeChange} />;
});
