import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";
import { socialprofils } from "../../content_op";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} rel="noopener noreferrer" target="_blank">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook} rel="noopener noreferrer" target="_blank">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} rel="noopener noreferrer" target="_blank">
              <FaLinkedin />
            </a>
          </li>
        )}
         {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram} rel="noopener noreferrer" target="_blank">
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
