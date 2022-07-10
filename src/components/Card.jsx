import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { CardItem } from "./CardItem";
import styles from "./Card.module.css";

export const Card = ({ cardvalueHandeller, length, perBoxLength }) => {
  const inputRef = useRef([]);
  const [inputbox] = useState(new Array(length).fill("1"));
  const [inputval, setInputVal] = useState(new Array(length).fill(""));

  const handleChange = (e, index) => {
    if (e.target.value.length > 3 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }

    inputval[index] = e.target.value;
    setInputVal(inputval);
    cardvalueHandeller(inputval.join("-"));
  };

  // backspace handller

  const handlebackSpace = (e, index) => {
    if (e.target.value.length < 1 && index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputval[index] = e.target.value;
    setInputVal(inputval);
    cardvalueHandeller(inputval.join("-"));
  };
  const handlepast = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length * perBoxLength);
    //   console.log(data)
    let newData = [];
    for (let i = 0; i < data.length; i += perBoxLength) {
      let tmp = "";
      for (let j = 0; j < perBoxLength; j++) {
        tmp += data[i + j];
      }
      newData.push(tmp);
    }
    // console.log(newData,"new data")
    newData.forEach((value, index) => {
      inputval[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };
  return (
    <div onPaste={handlepast} className={styles.main}>
      {inputbox.map((item, index) => {
        return (
          <CardItem
            key={index}
            handleChange={(e) => handleChange(e, index)}
            handlebackSpace={(e) => handlebackSpace(e, index)}
            ref={(elem) => {
              inputRef.current[index] = elem;
            }}
          ></CardItem>
        );
      })}
    </div>
  );
};
