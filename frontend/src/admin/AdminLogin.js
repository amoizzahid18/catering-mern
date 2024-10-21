import React from "react";

function AdminLogin() {
  return (
    <div className="flex justify-center items-center flex-col sm:flex-row min-w-screen pt-10 sm:pt-32">
      <div className="w-1/2 flex justify-center xsm:justify-end sm:px-24 xsm:px-40">
        <div className="text-xl flex justify-center items-center flex-col max-w-24 btn-circle w-full h-full text-center">
          <img
            className="w-12  sm:mx-0 xs:w-24   mt-20"
            src="https://cdn-icons-png.flaticon.com/128/45/45200.png"
          />
          <div className="font-medium text-center text-lg sm:text-xl">
            Saifii's
          </div>
        </div>
      </div>
      <div className="w-screen xsm:w-1/2 flex justify-center xsm:justify-start xsm:mt-10  mt-6 ">
        <div class="flex  flex-col justify-center items-center  px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Log in to your account
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md  py-1.5 ring-1 ring-inset ring-gray-300 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
