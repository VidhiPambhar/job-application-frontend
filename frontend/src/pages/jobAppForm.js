import axios from 'axios';
import React, { useState } from 'react';

const EducationForm = ({ onSubmit, onNext }) => {
  const [educationDetails, setEducationDetails] = useState({
    ssc: '',
    hsc: '',
    graduation: '',
    masterDegree: '',
    boardUniversity: '',
    educationYear: '',
    educationPercentage: '',
  });

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onNext();
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      if (response.ok) {
        console.log('User created successfully');
      } else {
        console.error('Error creating user');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    onSubmit({ ...userDetails });
  };
  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">Education Details</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">SSC:</label>
        <input
          type="text"
          name="ssc"
          value={educationDetails.ssc}
          onChange={handleEducationChange}
          className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
        />
      </div>


      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </form>
  );
};

const UserDetailsForm = ({ onSubmit, onPrev }) => {
  const [userDetails, setUserDetails] = useState({
    userName: '',
    userEmail: '',
    userAddress: '',
    userGender: '',
    userContact: '',
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/api/users/create', userDetails);
      if (response.status === 201) {
        console.log('User created successfully');
      } else {
        console.error('Error creating user');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    onSubmit({ ...userDetails });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">User Basic Details</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">User Name</label>
        <input
          type="text"
          name="userName"
          value={userDetails.userName}
          onChange={handleUserChange}
          className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">User Email</label>
        <input
          type="text"
          name="userEmail"
          value={userDetails.userEmail}
          onChange={handleUserChange}
          className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="userAddress"
          value={userDetails.userAddress}
          onChange={handleUserChange}
          className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
        />
      </div>
     
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">User Contact</label>
        <input
          type="text"
          name="userContact"
          value={userDetails.userContact}
          onChange={handleUserChange}
          className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
        />
      </div>


      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Gender:</label>
        <div className="mt-1">
          <input
            type="radio"
            id="female"
            name="userGender"
            value="Female"
            checked={userDetails.userGender === 'Female'}
            onChange={handleUserChange}
            className="mr-2"
          />
          <label htmlFor="female" className="mr-4">
            Female
          </label>
          <input
            type="radio"
            id="male"
            name="userGender"
            value="Male"
            checked={userDetails.userGender === 'Male'}
            onChange={handleUserChange}
            className="mr-2"
          />
          <label htmlFor="male" className="mr-4">
            Male
          </label>
          <input
            type="radio"
            id="other"
            name="userGender"
            value="Other"
            checked={userDetails.userGender === 'Other'}
            onChange={handleUserChange}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>


      <div className="flex justify-between">
        <button type="button" onClick={onPrev} className="text-blue-500">
          Back
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

const MyForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleEducationSubmit = (data) => {
    setFormData({ ...formData, educationDetails: data });
    handleNext();
  };

  const handleUserSubmit = (data) => {
    setFormData({ ...formData, userDetails: data });
    console.log(formData);
  };

  return (
    <div className="max-w-screen-md mx-auto mt-8 space-y-4">
      {step === 1 && <EducationForm onSubmit={handleEducationSubmit} onNext={handleNext} />}
      {step === 2 && (
        <UserDetailsForm onSubmit={handleUserSubmit} onPrev={handlePrev} />
      )}
    </div>
  );
};

export default MyForm;
