import React from "react";

function OrderItemDetails() {
  return (
    <div className="p-8 my-10 max-h-screen">
      <div className="max-w-6xl  mx-auto    bg-red-50 rounded-lg shadow-lg p-3">
        <div className="flex justify-between flex-col sm:flex-row items-center my-3 mx-10">
          <h2 className="text-xl font-semibold mb-3 sm:mb-0">
            Order Number <span className="text-red-600">#256894</span>
          </h2>
          <button className="btn btn-primary text-lg text-white px-4 py-2 rounded">
            Call Customer
          </button>
        </div>

        <div className="flex justify-around w-full items-center flex-col xsm:flex-row ">
          <div className="mx-4 ">
            <div className="xxsm:w-full xsm:w-11/12 w-full bg-gray-50 px-3 xs:px-10 shadow-lg py-4 rounded-lg mb-6">
              <table className="sm:w-96  text-left">
                <thead className="">
                  <tr className=" ">
                    <th className="py-2 text-xl ">Items summary</th>
                    <th className="py-4">QTY</th>
                    <th className="py-4">Price</th>
                    <th className="py-4">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-2 ">
                    <td className="py-4">Chocolate Milkshake</td>
                    <td className="py-4">x 1</td>
                    <td className="py-4">£150.00</td>
                    <td className="py-4">£150.00</td>
                  </tr>
                  <tr className="border-t-2 ">
                    <td className="py-4">Chocolate Milkshake</td>
                    <td className="py-4">x 2</td>
                    <td className="py-4">£7.50</td>
                    <td className="py-4">£15.00</td>
                  </tr>
                  <tr className="border-t-2 ">
                    <td className="py-4">Finish Washer</td>
                    <td className="py-4">x 3</td>
                    <td className="py-4">£70.00</td>
                    <td className="py-4">£210.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Customer and Order Details */}
            <div className="bg-gray-50 py-3 px-0 xs:p-3 shadow-lg rounded-lg mb-6">
              <h3 className="text-lg mx-4 pt-3 font-semibold mb-4">
                Customer And Order Details
              </h3>
              <div className="flex justify-center items-start flex-col">
                <div className="mx-4">
                  <p className="py-3 border-t-2">
                    <span className="font-semibold">Customer Name:</span> Harun
                    Libii
                  </p>
                  <p className="py-3 border-t-2">
                    <span className="font-semibold">Phone Number:</span>{" "}
                    7918888129
                  </p>
                  <p className="py-3 border-t-2">
                    <span className="font-semibold">Payment:</span> COD
                  </p>

                  <p className="py-3 border-t-2">
                    <span className="font-semibold">Status:</span> Unfulfilled
                  </p>
                  <p className="py-3 border-t-2">
                    <span className="font-semibold">Approval:</span> N/A
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-4 ">
            <div className="bg-gray-50 p-4 xxs:w-auto xxsm:84 xlsm:w-96  shadow-lg rounded-lg mb-6">
              <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4">Order summary</h3>
              <p>
                <span className="font-semibold">Order Created:</span> Sun, May
                7, 2021
              </p>
              <p>
                <span className="font-semibold">Order Time:</span> 06:24 AM
              </p>
              <p>
                <span className="font-semibold">Subtotal:</span> £375.00
              </p>
              <p>
                <span className="font-semibold">Delivery Fee:</span> £0.00
              </p>
            </div>
            <div className="bg-gray-50 p-4 shadow-lg xxs:w-auto    xxsm:84 xlsm:w-96 rounded-lg mb-6">
              <p className="font-semibold text-lg my-2">Total: £375.00</p>
            </div>

            {/* Delivery Address */}
            <div className="bg-gray-50 p-4 shadow-lg xxs:w-auto xxsm:84 xlsm:w-96 rounded-lg">
              <h3 className="text-lg font-semibold border-b-2 pb-2 mb-2">Delivery Address</h3>
              <p>
                <span className="font-semibold">Address Line 1:</span> 14
                Anglesey Road
              </p>
              <p>
                <span className="font-semibold">Flat / Building Name:</span>{" "}
                James Court
              </p>
              <p>
                <span className="font-semibold">Street Name:</span> Anglesey
                Road
              </p>
              <p>
                <span className="font-semibold">Postcode:</span> En3 4hy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItemDetails;
