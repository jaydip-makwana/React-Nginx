import React from "react";
import "./Fruits.css";

function Fruits({ filter }) {
  const dataJSX = filter?.map((element) => {
    return (
      <>
        <div>
          {element["name"]} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          {element.price}
        </div>
      </>
    );
  });
  return (
    <>
      <div className="fruit">
        <b className="title">Fruits</b>
        {dataJSX}
      </div>
    </>
  );
}
export default Fruits;
