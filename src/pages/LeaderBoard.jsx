import { useGetAllDonerQuery } from "../redux/api/baseApi";

const LeaderBoard = () => {
  const { data } = useGetAllDonerQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>this is leaderboard</h1>
    </div>
  );
};

export default LeaderBoard;
