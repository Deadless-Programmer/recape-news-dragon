import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";
const RgihtNav = () => {
  return (
    <div>
      <h3 className="fw-bolder">Login With</h3>

      <div className="mt-3">
        <Button className="mb-2 w-75" variant="outline-primary">
          {" "}
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button className="w-75" variant="outline-primary">
          {" "}
          <GoMarkGithub></GoMarkGithub> Login with Github
        </Button>
      </div>

      <div className="mt-3">
        <h3>Find Us On </h3>
        <ListGroup className="mt-2">
          <ListGroup.Item>
            {" "}
            <FaFacebook></FaFacebook> Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter></FaTwitter> Twitter{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram></FaInstagram> Instagram{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-3">
        <Qzone></Qzone>
      </div>

      <div className="position-relative">
        <img src={bg} alt="" />
        <div className="text-center text-white position-absolute top-50    translate-middle-y ">
          <h3>Create an amazing newspaper</h3>
          <p>
            <small>
              The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </small>
          </p>

          <Button variant="danger">Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default RgihtNav;
