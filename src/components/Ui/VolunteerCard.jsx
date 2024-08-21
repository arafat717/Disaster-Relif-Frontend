/* eslint-disable react/prop-types */
const VolunteerCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <img src={data?.image} alt="" />
    </div>
  );
};

export default VolunteerCard;
