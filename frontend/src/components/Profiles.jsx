import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProfilesContext } from "../UserContextProvider";
import { useSelector } from "react-redux";
import axios from "axios";

const Profiles = () => {
  const allProfiles = useContext(ProfilesContext);
  const data = allProfiles.profiles;
  const { authUser } = useSelector((store) => store.user);
  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout");
      dispatch({ type: "RESET_STATE" });
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-gradient-to-bl from-cyan-500 to-blue-500 flex flex-col justify-between overflow-x-hidden">
      <Header title={"Profiles"} />
      <div class="bg-white overflow-hidden shadow rounded-lg border">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            User Profile
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
          </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Full name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {authUser.username}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {authUser.email}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                (123) 456-7890
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Address
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                123 Main St
                Anytown, USA 12345
              </dd>
            </div>
          </dl>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-800 w-fit font-semibold"
        >
          Log out
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Profiles;
