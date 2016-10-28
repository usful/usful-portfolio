'use strict';

export default function mediaUri(media) {
  //TODO: switch based on media.type to give a url for video, mp3 sound etc.
  //TODO: refactor to use new s3 library for usful portfolio
  return `https://usful-portfolio.s3.amazonaws.com/${media.folder}/${media._id}`;
}