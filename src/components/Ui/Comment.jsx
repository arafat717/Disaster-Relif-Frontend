import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Comment = ({ name, comment, timestamp }) => {
  const theme = useSelector((state) => state.toggle.theme);
  // Function to format timestamp to "time ago" format
  const timeAgo = (timestamp) => {
    const current = new Date();
    const previous = new Date(timestamp);
    const diff = current - previous;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
    if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
    if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }
    if (seconds > 0) {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
    return "Just now";
  };

  return (
    <div className={`rounded-lg shadow-md p-4 mb-4 card ${theme}`}>
      <div className="flex items-start">
        <img
          className="h-10 w-10 rounded-full object-cover mr-3"
          src="https://via.placeholder.com/40"
          alt={`${name}'s profile`}
        />
        <div>
          <div className="flex items-center mb-1">
            <h3 className="text-sm font-semibold mr-1">{name}</h3>
            <p className={`text-xs`}>{timeAgo(timestamp)}</p>
          </div>
          <p className={`text-sm text-gray-800 comment ${theme}`}>
            {comment.slice(0, 700)}{" "}
            <span className="text-gray-400 cursor-pointer">....Read More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Comment;
