import React from 'react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">Settings</h1>
        
        <div className="mb-4">
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
            Theme
          </label>
          <select
            id="theme"
            name="theme"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <select
            id="language"
            name="language"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="notifications" className="block text-sm font-medium text-gray-700">
            Notifications
          </label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              <span className="ml-2">Email</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              <span className="ml-2">SMS</span>
            </label>
          </div>
        </div>
        
        <div className="mb-4 text-center">
          <button
            type="submit"
            className="inline-block px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
