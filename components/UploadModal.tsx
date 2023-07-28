"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      // Reset the form
      uploadModal.onClose();
    }
  };
  return (
    <Modal
      title="Upload Your Songs"
      description="Add your songs"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      UploadModal
    </Modal>
  );
};

export default UploadModal;
