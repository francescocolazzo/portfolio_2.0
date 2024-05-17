import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [username, setUsername] = useState('francescocolazzo');

  useEffect(() => {
    axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then((res) => setProjects(res.data));
  }, [username]);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
          {projects.map(project => {

            return (
              <div key={project.id} className="po_item">
                <div className="content linkDiv"  onClick={() => { window.location.href = project.html_url; } }>

                  <FaGithub></FaGithub>
                  <p>{project.name}</p>
                  <p>{project.description }</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
