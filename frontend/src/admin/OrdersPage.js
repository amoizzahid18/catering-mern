import React from "react";
import OrderItem from "./OrderItem";

function OrdersPage() {
  return (
    <div className="my-10 max-h-screen sm:mx-10">
      <div className=" my-6 text-4xl font-medium sm:font-semibold">ORDERS</div>
      <div className="m-10">
        <div className="my-10  overflow-x-auto  overflow-y-auto ">
          <table className="table table-xs sm:table-sm xmd:table-lg   table-pin-rows">
            <thead className="text-lg xxsm:text-xl ">
              <tr className="bg-base-200">
                <td>Order</td>
                <td>Details</td>
                <td>Date</td>
                <td>Customer</td>
                <td>Total</td>
                <td>Items</td>
                <td>Approval</td>
                <td>Payment</td>
                <td>Delivery</td>
              </tr>
            </thead>
            <tbody>
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </tbody>
            <tfoot className="text-lg xxsm:text-xl ">
              <tr className="bg-base-200">
                <td>Order</td>
                <td>Details</td>
                <td>Date</td>
                <td>Customer</td>
                <td>Total</td>
                <td>Items</td>
                <td>Approval</td>
                <td>Payment</td>
                <td>Delivery</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
