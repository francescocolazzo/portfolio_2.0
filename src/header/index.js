import React, { useEffect, useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { introdata, logotext, copyright, socialprofils } from "../content_op";
import Themetoggle from "../components/themetoggle";
import ImageModal from "../components/ImageModal";

const Headermain = () => {
  const [isShowed, SetShowed] = useState(false);
  const handleShowImg = () => {
    SetShowed(!isShowed);
  };

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  useEffect(() => {
    const section = document.querySelector(".intro_sec_2");
    if (section && !isActive) {
      section.style = "display:none";
    }
    if (isShowed && !isActive) {
      console.log(isActive,isShowed);
      SetShowed(!isShowed);
    }

    return () => {
      if (section && !isActive) {
        section.style = "display:block";
      }
    };
  }, [isActive, isShowed]);

  return (
    <>
      <header className="fixed-top site__header">
        <div className="header-absolute d-flex align-items-center justify-content-between">
          <div className="d-flex ">
            <div
              className="header_img"
              style={{ backgroundImage: `url(${introdata.my_img})` }}
              onClick={handleShowImg}
            ></div>
            <Link className="navbar-brand nav_ac" to="/">
              {logotext}
            </Link>
          </div>

          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className="my-3"
                    >
                      {" "}
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      {" "}
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a
                href={socialprofils.facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
              <a
                href={socialprofils.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                href={socialprofils.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
              <a
                href={socialprofils.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <p className="copyright m-0">copyright __ {copyright}</p>
          </div>
        </div>
      </header>
      <ImageModal
        show={isShowed}
        onHide={() => SetShowed(!isShowed)}
        imageUrl={introdata.my_img}
      />
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
