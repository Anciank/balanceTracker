"use client"

import { useEffect, useState } from 'react';
import { deleteRecord } from '@/services/actions';

interface DeleteButtonProps {
  id: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteRecord(id);
      // Optionally, you can perform additional actions after deletion
    } catch (error) {
      // Handle error if necessary
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button className='bg-blue-800 p-2 hover:bg-blue-950 text-white' onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteButton;
