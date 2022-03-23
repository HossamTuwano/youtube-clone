import React from "react";
import { Avatar } from "@material-ui/core";
import "../ChannelRow.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar src={image} className="channelRow__image" alt={channel} />

      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineIcon />}
        </h4>
        <p>
          {subs} Subscribers &bull; {noOfVideos}
        </p>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
