import React, { useState } from "react";
import {
  Wrapper,
  Form,
  FormCenter,
  H3,
  Div,
  H4,
  UpdateForm,
} from "./ProfileStyle";
import DashFormRow from "../../../components/DashFormRow/DasFormRow";
import Button, { BUTTON_TYPE_CLASSES } from "../../../components/Button/Button";
import { useAuthGlobalContext } from "../../../context/authContext/authContext";
import { toast } from "react-toastify";
const Profile = () => {
  const { user, uploadPhoto, updateUser, isLoading } = useAuthGlobalContext();

  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
  });
  const { name, email } = formData;

  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

 
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    uploadPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
    
  };

  return (
    <Wrapper>
      <H3>Profile</H3>
      <Div>
        <Form>
          <H4>Edit Details</H4>
          <FormCenter>
            <DashFormRow
              htmlFor="name"
              labelText="Name"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required="required"
              autoComplete="false"
            />
            <DashFormRow
              htmlFor="email"
              labelText="Email"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required="required"
              autoComplete="false"
            />
            <DashFormRow
              htmlFor="photo"
              id="photo"
              labelText="Profile Picture"
              type="file"
              name="photo"
              onChange={handlePhoto}
              accept="image/*"
            />
          </FormCenter>
        </Form>
        <UpdateForm>
          <Button
            type="submit"
            className="btn-center"
            buttonType={BUTTON_TYPE_CLASSES.dash}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "UPDATING..." : "Save Changes"}
          </Button>
        </UpdateForm>
      </Div>
    </Wrapper>
  );
};

export default Profile;
