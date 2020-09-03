import React, { Fragment, useState } from "react";
import Data from "./Products.json";
import "./AutoComplete.css";

export default function AutoComplete() {
  const [term, setTerm] = useState("");

  // console.log("Data is ", term.length);

  const searchHandler = (e) => {
    setTerm(e.target.value);
  };

  const searchFilter = (searchTerm) => {
    return function (x) {
      return (
        x.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        !searchTerm
      );
    };
  };

  return (
    <Fragment>
      <input
        type="text"
        onChange={searchHandler}
        placeholder="Search Here"
        value={term}
      />
      {/* {Data.map((item, i) => (
        <div key={i}>
          Brand is, {item.product_brand} and product is, {item.product_name}
        </div>
      ))} */}
      {term.length > 0 ?
      <div className="search-result">
      {Data.filter(searchFilter(term)).map((Data, i) => (
        <div key={i}>
          {/* <h1>Brand: {Data.product_brand}</h1> */}
          <div>{Data.product_name}</div>
          <hr />
        </div>
      ))}
      </div> : null}
    </Fragment>
  );
}
