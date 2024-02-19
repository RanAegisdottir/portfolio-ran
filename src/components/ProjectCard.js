import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
      <Col size={12} sm={6} md={4}>
        <a href={link} className="item">
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              {link && <p>Click to Play!</p>}
            </div>
          </div>
        </a>
      </Col>
    );
  };
  