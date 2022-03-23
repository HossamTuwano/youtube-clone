import React from "react";
import "../VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow ">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h4>{title}</h4>
        <p className="videoRow__headline">
          {channel} &bull; &nbsp;
          <span className="videoRow__subs ">
            <span className="videoRow__subsNumber">{subs}</span>
            Subscribers
          </span>
          &nbsp; {views} Views &bull; {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
