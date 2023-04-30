
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";

import { Button } from "react-bootstrap";


const Header = () => {


  return (
    <div className="container">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          {" "}
          <small>Journalist without fear or favor</small>{" "}
        </p>
        <p> {moment().format("dddd, MMMM D, YYYY")} </p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      
    </div>
  );
};

export default Header;
