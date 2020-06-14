import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

Video.propTypes = {
  style: PropTypes.object,
  videoCode: PropTypes.string,
};
export default function Video({ style, videoCode }) {
  return (
    <iframe
      style={{ style }}
      className={css`
        @media (max-width: 950px) {
          width: 100%;
        }
      `}
      title="blah"
      width="500"
      height="315"
      src={`https://www.youtube.com/embed/${videoCode}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}
