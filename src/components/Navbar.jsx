/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

// .nav-container {

// }

const NavContainer = styled.div`
  padding: 30px;
  background-color: #0a1f41;
  position: fixed;
  height: 90px;
  inset: 0;

  z-index: 1000;
  h2 {
    color: #fff;
    font-size: 25px;
    font-weight: normal;
    font-style: italic;
  }

  button {
    padding: 9px;
    background-color: transparent;
    border: 1px solid #aeaeae;
    color: #fff;
    font-style: italic;
    border-radius: 6px;

    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;

const Navbar = ({ setOpen }) => {
  // you can also use this

  // const handleClick = () => {
  //   setOpen(true);
  // };

  return (
    <NavContainer className="flex jc-between ai-center">
      <h2>Welcome To My Repo</h2>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Create Repository
      </button>
    </NavContainer>
  );
};

export default Navbar;
