import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_op";
import { Link } from "react-router-dom";
import ScenePc from "../../components/ScenePc";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-lg-flex ps-5 ms-1 ">
          <div className="intro_btn-action pb-5 ">
            <Link to="/portfolio" className="text_2">
              <div id="button_p" className="ac_btn btn ">
                My Portfolio
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
            <Link to="/contact">
              <div id="button_h" className="ac_btn btn">
                Contact Me
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
          </div>
          <div className="text d-block justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 30,
                      delay: 50,
                    }}
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="intro_sec_2">
          <ScenePc />
        </div>
      </section>
    </HelmetProvider>
  );
};
