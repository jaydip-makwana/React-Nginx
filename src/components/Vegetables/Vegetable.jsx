import React from "react";
import "./Vegetable.css";

export default function Vegetable({ filter }) {
  const dataJSX = filter?.map((data) => {
    return (
      <>
        <div>
          {data.name} &nbsp; &nbsp; &nbsp; {data.price}
        </div>
      </>
    );
  });
  return (
    <>
      <div className="vegetable">
        <b className="title">Vegetable</b>

        {dataJSX}
      </div>
    </>
  );
}
