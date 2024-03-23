import UserForm from "../../components/Form/UserForm";
import VolunteerList from "../../components/Ui/VolunteerList";
import AboutUs from "../../components/common/AboutUs ";
import Testimonial from "../../components/common/Testimonial";

const Volunteer = () => {
  return (
    <div>
      <AboutUs></AboutUs>
      <Testimonial></Testimonial>
      <VolunteerList></VolunteerList>
      <UserForm></UserForm>
    </div>
  );
};

export default Volunteer;
