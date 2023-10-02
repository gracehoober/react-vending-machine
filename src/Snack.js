import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function Snack() {
  const params = useParams();

  return (
    <>
    <h1>I AM A SNACK {`${params.snack.toUpperCase()}`}</h1>
    <Link to="/">Vending Machine</Link>
    </>
  )

}

export default Snack;