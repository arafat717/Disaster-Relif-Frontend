import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/authSlice";
import { useState } from "react";
import { toast } from "sonner";
import { useCreateCommentMutation } from "../../redux/api/communityApi";

const CommentForm = () => {
  const theme = useSelector((state) => state.toggle.theme);
  const currentUser = useSelector(selectCurrentUser);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [nameError, setNameError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [createComment, { isLoading: isCommenting }] =
    useCreateCommentMutation();

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      if (!currentUser) {
        console.error("User not logged in");
        return;
      }

      // Validate name and comment fields
      if (!name.trim()) {
        setNameError("Name is required");
        return;
      }
      if (!comment.trim()) {
        setCommentError("Comment is required");
        return;
      }

      const { email } = currentUser;
      const timestamp = new Date().toISOString(); // Get current time
      const res = await createComment({ name, email, comment, timestamp });
      console.log(res);
      // Clear comment field or do any other necessary actions upon successful comment submission
      setComment("");
      setName("");
      toast.success("Your Post Successful");
    } catch (error) {
      console.error("Comment failed:", error);
      // Handle comment submission error
    }
  };

  return (
    <div className={` p-6 rounded-lg card ${theme} my-10`}>
      <h1 className="text-center text-2xl font-semibold mb-4">
        Post Your Thought
      </h1>
      {currentUser ? (
        <>
          <form onSubmit={handleComment}>
            <input
              className={` border border-gray-300 rounded-md px-3 py-2 mb-4 w-full ${
                nameError ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
            />
            {nameError && <p className="text-red-500 mb-2">{nameError}</p>}
            <input
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
              type="email"
              value={currentUser.email}
              readOnly
            />
            <textarea
              className={` border border-gray-300 rounded-md px-3 py-2 mb-4 w-full ${
                commentError ? "border-red-500" : ""
              }`}
              placeholder="Your comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                setCommentError("");
              }}
            />
            {commentError && (
              <p className="text-red-500 mb-2">{commentError}</p>
            )}
            <button
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              type="submit"
              disabled={isCommenting}
            >
              {isCommenting ? "Posting..." : "Post"}
            </button>
          </form>
        </>
      ) : (
        <h2 className="text-2xl">Please log in to leave a Post</h2>
      )}
    </div>
  );
};

export default CommentForm;
