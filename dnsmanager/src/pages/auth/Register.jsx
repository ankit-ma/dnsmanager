import "./Auth.css";
import PopupModal from "../../UI/PopupModal";

import { useState } from "react";

const api = require("../../api/index");
function Register(props) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something went wrong");
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleInputChange = (event) => {
    console.log(formData);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitRegistrationDetails = async () => {
    console.log("here");
    try {
      const filteredObj = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value.length === 0)
      );
      console.log("filtered object", filteredObj);
      if (Object.keys(filteredObj).length === 0) {
        console.log("Inside if case");
        await api.signup(
          formData.firstname,
          formData.lastname,
          formData.email,
          formData.password
        );
      } else {
        setErrorMessage("All field are required");
        openModal();
      }
    } catch (error) {
      if (error.response !== undefined) setErrorMessage(error.response.data);
      else setErrorMessage("Something went wrong");
      openModal();
    }
  };
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-teal-100">
        <div className="p-12 m-2 py-40">
          <svg
            width="300px"
            height="300px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M416 425.6l78.4 44.8c9.6 6.4 16 16 16 27.2v91.2c0 11.2-6.4 22.4-16 27.2L416 662.4c-9.6 6.4-22.4 6.4-32 0l-78.4-44.8c-9.6-6.4-16-16-16-27.2v-91.2c0-11.2 6.4-22.4 16-27.2l78.4-44.8c9.6-8 22.4-8 32-1.6z"
              fill="#2F4BFF"
            />
            <path
              d="M643.2 267.2c-3.2-1.6-4.8-1.6-8 0l-67.2 38.4c-3.2 1.6-3.2 4.8-3.2 6.4v76.8c0 3.2 1.6 4.8 3.2 6.4l67.2 38.4c3.2 1.6 4.8 1.6 8 0l67.2-38.4c3.2-1.6 3.2-4.8 3.2-6.4v-76.8c0-3.2-1.6-4.8-3.2-6.4l-67.2-38.4z m9.6-12.8l67.2 38.4c8 4.8 12.8 12.8 12.8 20.8v76.8c0 8-4.8 16-12.8 20.8l-67.2 38.4c-8 4.8-16 4.8-24 0l-67.2-38.4c-8-4.8-12.8-12.8-12.8-20.8v-76.8c0-8 4.8-16 12.8-20.8l67.2-38.4c6.4-4.8 16-4.8 24 0zM688 691.2l-67.2 38.4v76.8l67.2 38.4 67.2-38.4v-76.8L688 691.2z m83.2 9.6c9.6 6.4 16 16 16 27.2v76.8c0 11.2-6.4 22.4-16 27.2L704 873.6c-9.6 6.4-22.4 6.4-32 0l-67.2-38.4c-9.6-6.4-16-16-16-27.2v-76.8c0-11.2 6.4-22.4 16-27.2l67.2-38.4c9.6-6.4 22.4-6.4 32 0l67.2 35.2zM176 169.6v44.8l40 22.4 40-22.4v-44.8l-40-22.4-40 22.4zM275.2 144c8 4.8 12.8 12.8 12.8 20.8v54.4c0 8-4.8 16-12.8 20.8l-48 27.2c-8 4.8-16 4.8-24 0l-48-27.2c-6.4-4.8-11.2-12.8-11.2-20.8v-54.4c0-8 4.8-16 12.8-20.8l48-27.2c8-4.8 16-4.8 24 0L275.2 144zM192 777.6l-48 27.2v54.4l48 27.2 48-27.2v-54.4l-48-27.2z m8-14.4l48 27.2c4.8 3.2 8 8 8 14.4v54.4c0 6.4-3.2 11.2-8 14.4l-48 27.2c-4.8 3.2-11.2 3.2-16 0l-48-27.2c-4.8-3.2-8-8-8-14.4v-54.4c0-6.4 3.2-11.2 8-14.4l48-27.2c4.8-3.2 11.2-3.2 16 0z"
              fill="#050D42"
            />
            <path
              d="M403.2 776l-62.4 62.4c-1.6 1.6-3.2 1.6-6.4 1.6h-88c-4.8 0-8-3.2-8-8s3.2-8 8-8h84.8l59.2-59.2v-68.8c0-4.8 3.2-8 8-8s8 3.2 8 8v64H576c4.8 0 8 3.2 8 8s-3.2 8-8 8H403.2z m-11.2-436.8l-108.8-94.4c-3.2-3.2-3.2-8-1.6-11.2 3.2-3.2 8-3.2 11.2-1.6l110.4 94.4H528c4.8 0 8 3.2 8 8s-3.2 8-8 8h-120V400c0 4.8-3.2 8-8 8s-8-3.2-8-8v-60.8zM800 728c-4.8 0-8-3.2-8-8s3.2-8 8-8h88c4.8 0 8 3.2 8 8s-3.2 8-8 8H800z m-49.6-435.2c-3.2 3.2-8 3.2-11.2 1.6-3.2-3.2-3.2-8-1.6-11.2l96-112c3.2-3.2 8-3.2 11.2-1.6 3.2 3.2 3.2 8 1.6 11.2l-96 112zM160 504c-4.8 0-8-3.2-8-8s3.2-8 8-8h112c4.8 0 8 3.2 8 8s-3.2 8-8 8h-112z m536 144c0 4.8-3.2 8-8 8s-8-3.2-8-8V544c0-4.8 3.2-8 8-8s8 3.2 8 8v104z"
              fill="#050D42"
            />
          </svg>
        </div>
        <div className="w-full max-w-xs m-8">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname"
                type="text"
                placeholder="First Name"
                name="firstname"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email act as Username"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {/* {formData.password === "" && (
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              )} */}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submitRegistrationDetails}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      {isOpen && (
        <PopupModal
          isOpen={isOpen}
          onClose={closeModal}
          title="Error"
          message={errorMessage}
          type="error"
        />
      )}
    </>
  );
}

export default Register;
