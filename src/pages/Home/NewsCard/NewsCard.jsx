import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShareAlt, FaBookmark, FaRegBookmark, FaStar , FaEye, FaRegStar} from "react-icons/fa";
import moment from "moment";
import Rating from "react-rating";
const NewsCard = ({ news }) => {
  const { _id, image_url, details, title, author, rating, total_view } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              {/* <Card.Img variant="top" style={{width:'40px'}} src={author.img} /> */}
              <img
                className="rounded-circle"
                style={{ height: "40px" }}
                src={author?.img}
                alt=""
              />
              <div>
                <p className="p-0 m-0">{author?.name}</p>
                <p className="p-0 m-0">
                  {" "}
                  {moment(author?.published_date).format("YYYY-MM-D")}{" "}
                </p>
              </div>
            </div>
            <div className="d-flex mt-3 gap-1">
              <p>
                <FaRegBookmark></FaRegBookmark>
              </p>
              <p>
                {" "}
                <FaShareAlt></FaShareAlt>{" "}
              </p>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />

          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read More</Link>{" "}
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1" >
            <Rating 
             placeholderRating={rating?.number}
             readonly
             emptySymbol={<FaRegStar></FaRegStar>}
             placeholderSymbol={<FaStar className="text-warning" ></FaStar>}
             fullSymbol={<FaStar></FaStar>}
            
            
            ></Rating>
          <p>  {rating?.number}</p>
          </div>
          <div>
            <p> <FaEye></FaEye> {total_view} </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
