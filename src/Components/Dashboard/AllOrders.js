import React from "react";
import { Dropdown, DropdownButton, Table } from "react-bootstrap";

export default function AllOrders() {
  return (
    <div className="container">
      <p style={{textAlign: 'center', fontSize: '20px', fontWeight: '580'}}>All Orders</p>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Invoice</th>
            <th>Name</th>
            <th>Placed at</th>
            <th>Ship To</th>
            <th>Payment Method</th>
            <th>Total Bill</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>#1325644</td>
            <td>Eminem</td>
            <td>27 Otc 2021</td>
            <td>LA, USA</td>
            <td>Prepaid</td>
            <td>$155</td>
            <td> Processing</td>
          </tr>
          <tr>
            <td>1</td>
            <td>#1325644</td>
            <td>Eminem</td>
            <td>27 Otc 2021</td>
            <td>LA, USA</td>
            <td>Prepaid</td>
            <td>$155</td>
            <td> Processing</td>
          </tr>
          <tr>
            <td>1</td>
            <td>#1325644</td>
            <td>Eminem</td>
            <td>27 Otc 2021</td>
            <td>LA, USA</td>
            <td>Prepaid</td>
            <td>$155</td>
            <td> Processing</td>
          </tr>
          <tr>
            <td>1</td>
            <td>#1325644</td>
            <td>Eminem</td>
            <td>27 Otc 2021</td>
            <td>LA, USA</td>
            <td>Prepaid</td>
            <td>$155</td>
            <td> Processing</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
