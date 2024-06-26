"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";

const Library = () => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    // TODO: Check for subscription
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div
        className="
            flex
            items-center
            justify-between
            px-5
            pt-4
        "
      >
        <div
          className="
                inline-flex
                items-center
                gap-x-2
            "
        >
          <TbPlaylist className="text-neutral-400" size={26} />
          <p
            className="
                text-md
                font-medium
                text-neutral-400
              "
          >
            Your Library
          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          className="
                cursor-pointer
                text-neutral-400
                transition
                hover:scale-[1.3]
                hover:text-white
            "
        />
      </div>
      <div
        className="
            mt-4
            flex
            flex-col
            gap-y-2
            px-3
        "
      >
        List Of Songs!
      </div>
    </div>
  );
};

export default Library;
