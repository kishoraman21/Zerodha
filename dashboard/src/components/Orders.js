import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/getAllOrder").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div className="orders order-table">
      <table>
        <div className="">
          <h3 className="title">Orders ({orders.length})</h3>

          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {orders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
<br></br>
<br></br>
          <Link to={"/"} className="btn ">
            Get started
          </Link>
        </div>
      </table>
    </div>
  );
};

export default Orders;
