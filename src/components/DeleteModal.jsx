// eslint-disable-next-line no-unused-vars
import {createRepository, deleteRepository } from "../services";
import { CircularProgress } from "@chakra-ui/react";
/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
//import { MdClose } from "react-icons/md";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: filter(10px);
  z-index: 1000;
`;

const ModalInner = styled.div`
  height: 250px;
  width: 400px;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;

  .close {
    background-color: transparent;
  }

  h2,
  p {
    margin-bottom: 10px;
    color: black;
  }
`;

const ModalButton = styled.button`
  width: 100%;
  margin-top: 25px;
  padding: 10px;
  background-color: #28a745;
  border-radius: 5px;
  color: #fff;
  margin-top: 70px;
  &:hover {
    background-color: #90ee90;
  }
`;

const DeleteModal = ({ showModal, setShowModal, name }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  // you can also use this
  // const handleClick = () => {
  //   setShowModal(false);
  // };

  const navigate = useNavigate();

  const submitRepo = async () => {
    setIsLoading(true);

    try {
      const response = await deleteRepository(name);
      console.log(response);
      setShowModal(false);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      // Handle error (e.g., display an error message)
      console.error("Error deleting repository:", error);
    }
  };

  if (!showModal) {
    return null;
  }

  return (
    <ModalContainer className="flex ai-center jc-center">
      <ModalInner>
        <div className="flex ai-center jc-between">
          <h2>Delete repo</h2>
          <button
            className="close"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <IoMdClose size="25" />
          </button>
        </div>
        {/* Name of repo */}

        <p>
          Are you sure you want to delete{" "}
          <strong>
            <i>{name}</i>
          </strong>
        </p>

        <ModalButton onClick={submitRepo}>
          {isLoading ? (
            <CircularProgress size={23} isIndeterminate color="#000" />
          ) : (
            "Delete Repository"
          )}
        </ModalButton>
      </ModalInner>
    </ModalContainer>
  );
};

export default DeleteModal;
