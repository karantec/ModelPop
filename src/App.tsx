import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Open Card Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            Card Title
          </h3>
          <p className="mb-4 text-gray-600">
            This is a card-style modal popup. You can add any content here.
          </p>
          <button
            className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
