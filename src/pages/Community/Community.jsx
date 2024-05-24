import CommentForm from "../../components/Form/CommentForm";
import Comment from "../../components/Ui/Comment";
import Gallery from "../../components/Ui/Gallary";
import { useGetCommunityQuery } from "../../redux/api/communityApi";

const Community = () => {
  const { data: comments } = useGetCommunityQuery("");
  console.log(comments);

  return (
    <div>
      <Gallery></Gallery>
      <h1 className="text-center font-semibold mt-10">What Our User Says</h1>
      <hr className="my-10" />
      <div>
        {comments?.map((comment) => (
          <Comment
            key={comment._id}
            name={comment.name}
            comment={comment.comment}
            timestamp={comment.timestamp}
          ></Comment>
        ))}
      </div>
      <div>
        <CommentForm></CommentForm>
      </div>
    </div>
  );
};

export default Community;
