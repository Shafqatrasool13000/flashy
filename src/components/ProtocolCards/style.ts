import styled from "styled-components";

const AddProtocolStyled = styled.div`
  margin-top: 24px;

  .text-label {
    font-size: 17px;
  }

  .back-icon,
  .more-icon {
    cursor: pointer;
  }
  color: white;
  border-radius: 7px;
  background-color: #232535;
  max-width: 450px;
  padding: 20px;

  .method-btn {
    color: white;
    padding: 3px 9px;
    border: 1px solid white;
    border-radius: 7px;
    font-size: 14px;
    background: transparent;
    max-width: 200px;

    &:hover {
      background: rgb(255, 255, 255, 0.4);
      border: 1px solid rgb(255, 255, 255, 0.4);
    }
  }

  input {
    border: none;
    background: transparent;
    border-bottom: 0.5px solid rgb(255, 255, 255, 0.3);
    color: white;
    font-size: 20px;
    caret-color: white;

    &::placeholder {
      font-size: 22px;
      letter-spacing: 1px;
    }
  }
  label {
    font-size: 16px;
  }
  .meta-address {
    text-align: start;
  }
  .input-section {
    .max-btn {
      font-size: 14px;
      border-radius: 4px;
      padding: 0px 15px;
      background: transparent;
      color: white;
      border: 1px solid rgb(57, 59, 74);

      &:hover {
        background: rgb(255, 255, 255, 0.4);
        border: 1px solid rgb(255, 255, 255, 0.4);
      }
    }
  }

  .set-btn {
    background-color: rgb(58, 62, 91);
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default AddProtocolStyled;
