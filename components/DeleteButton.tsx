"use client"

import { useState } from 'react';
import { deleteRecord } from '@/services/actions';
import { Button } from '@nextui-org/button';

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
    <Button color='primary' onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? 'Deleting...' : 'Delete'}
    </Button>
  );
};

export default DeleteButton;
