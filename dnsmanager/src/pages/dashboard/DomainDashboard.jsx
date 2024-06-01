import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../UI/MyButton";
import { useState } from "react";
import "./Domain.css";
import AddForm from "./AddForm";

function DomainDashboard() {
  const dispatch = useDispatch();
  const { isLoggedIn, username } = useSelector((state) => state);
  const [showAddForm, setShowAddForm] = useState(false);

  const addButtonHandler = () => {
    setShowAddForm(true);
  };

  const closeAddForm = () => {
    setShowAddForm(false);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    // For example, dispatch an action to submit form data
    // After submission, close the AddForm
    closeAddForm();
  };

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <MyButton
            buttonHandler={addButtonHandler}
            buttonName={"+ Add Domain"}
          />
          <div className={`add-form ${showAddForm ? "open" : ""}`}>
            <AddForm onSubmit={handleFormSubmit} onCancel={closeAddForm} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DomainDashboard;
