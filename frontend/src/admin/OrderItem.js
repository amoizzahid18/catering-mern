import React from "react";
import { Link } from "react-router-dom";

function OrderItem() {
  return (
    <tr>
      <td>#0001</td>
      <td>
        <Link to="/saifii's/admin/orders/order-details/id" className="btn btn-ghost btn-sm bg-base-200">details</Link>
      </td>
      <td>30 Sep, 2024</td>
      <td>Brice Swyre</td>
      <td>24999</td>
      <td>3</td>
      <td className="bg-error">Not Approved</td>
      <td className="bg-success">Pending</td>
      <td className="bg-error">N/A</td>
    </tr>
  );
}

export default OrderItem;
