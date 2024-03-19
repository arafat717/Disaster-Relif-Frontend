/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDeleteDonationMutation } from "../../redux/api/baseApi";
import { Link } from "react-router-dom";

const DonationTable = ({ data }) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [deleteDonation, { isLoading }] = useDeleteDonationMutation();

  const handleDeleteConfirmation = (postId) => {
    setDeleteConfirmation(postId);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(null);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteDonation(deleteConfirmation);
      setDeleteConfirmation(null);
    } catch (error) {
      console.error("Failed to delete donation:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((post) => (
            <tr key={post._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {post.title}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{post.category}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{post.amount}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <Link to="/dashboard/create-donation">
                  <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    P.. Don.
                  </button>
                </Link>
                <button
                  className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded `}
                  onClick={() => handleDeleteConfirmation(post._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {deleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <p>Are you sure you want to delete this donation post?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
              <button
                className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded `}
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationTable;
