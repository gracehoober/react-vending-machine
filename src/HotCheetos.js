import React from "react";
import { Link } from "react-router-dom";

/** HotCheetos: Render hot cheetos. */

function HotCheetos() {
  return (
    <>
      <h1>I AM A HOT CHEETO</h1>
      <Link to="/">Vending Machine</Link>
    </>
  );
}

export default HotCheetos;