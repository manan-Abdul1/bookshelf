import { useAuth } from '@/context/AuthContext';
import { DELETE_USER_ALL_BOOKS } from '@/utils/serverUrl';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { userData, logout } = useAuth();
  const router = useRouter();

  const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleDeleteAccount = async () => {
        setDropdownVisible(false);
        try {
            const response = await axios.delete(
                `${DELETE_USER_ALL_BOOKS}/${userData?.id}`
            );
            if (response.data.ok) {
                toast.success("Your account successfully deleted");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error Updating status:", error);
        }
    };

  const handleSignOut = () => {
    setDropdownVisible(false);
    logout();
    router.push('/login')
  };

  return (
    <div className="bg-gray-800 text-white py-4 px-8 ">
      <div className="flex items-center justify-between">
        <p className="mr-4">BookShelf</p>
        <div className="relative">
          <button
            className="bg-transparent text-white py-2 px-4 border border-white rounded hover:bg-white hover:text-gray-800"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
             {userData.lastName}
          </button>
          {dropdownVisible && (
            <div className="absolute top-full left-0 bg-gray-800 border border-white rounded mt-2">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
