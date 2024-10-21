import React from "react";

function BookEvent() {
  return (
    <>
      <div className="max-w-4xl mt-20 mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Book an Event</h2>
        <form
          
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Date Selection */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">* Select Date</label>
            <input
              type="date"
              name="date"
              
              className="border rounded p-2"
              required
            />
          </div>

          {/* Time Selection */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">* Select Time</label>
            <input
              type="time"
              name="time"
              className="border rounded p-2"
              required
            />
          </div>

          {/* Number of Guests */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">* No Of Guests</label>
            <select
              name="guests"
              className="border rounded p-2"
              required
            >
              <option value="2">Below 10</option>
              <option value="4">Below 20</option>
              <option value="6">Below 50</option>
              <option value="8">Below 100</option>
              <option value="10">Above 100</option>
            </select>
          </div>

          {/* Branch Selection */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">* Select Branch</label>
            <select
              name="branch"
              
              className="border rounded p-2" 
              required
              
            >
              <option value="Sadiqabad">Sadiqabad, RawalPindi</option>
              <option value="I8">I/8 Islamabad</option>
              <option value="Saddar">Saddar, RawalPindi</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="flex flex-col"> 
            <label className="mb-1 font-semibold">* Full Name</label>
            <input
              type="text"
              name="fullName"
              
              className="border rounded p-2"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">* Email</label>
            <input
              type="email"
              name="email"
              
              className="border rounded p-2"
              placeholder="Email"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">* Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              
              className="border rounded p-2"
              placeholder="Contact Number"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600"
            >
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BookEvent;
