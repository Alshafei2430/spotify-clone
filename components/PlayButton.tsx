import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button
      className="
            bg-green-500
            flex
            items-center
            rounded-full
            p-4
            transition
            opacity-0
            drop-shadow-md
            translate-y-1/4
            group-hover:opacity-100
            group-hover:translate-y-0
            hover:scale-110
        "
    >
      <FaPlay className="text-white" />
    </button>
  );
};

export default PlayButton;
