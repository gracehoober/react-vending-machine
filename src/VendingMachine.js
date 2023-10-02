import React from "react";
import { Link } from "react-router-dom";


/** VendingMachine: Show links to snacks. */

function VendingMachine() {
  return (
    <>
    <Link to="/HotCheetos">Hot Cheetos</Link> <br></br>
    <Link to="/Funyuns">Funyuns</Link> <br></br>
    <Link to="/Doritos">Doritos</Link>
    </>
  );
}

export default VendingMachine;