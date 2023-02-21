import React from "react";
import { FaUserCircle } from "react-icons/fa";
import UserImg from "./UserImageStyles";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
const UserImage = () => {
  const { user } = useAuthGlobalContext();
  return (
    <>
      {user?.photo ? (
        <UserImg
          src={user?.photo}
          alt="photo"
        />
      ) : (
        <FaUserCircle fontSize={"1.7rem"} />
      )}
    </>
  );
};

export default UserImage;
