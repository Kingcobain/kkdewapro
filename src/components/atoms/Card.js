import React from "react"

const Card = ({ heading, paragraph, imgUrl, videoSrcURL, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      {videoSrcURL ? (
        <video
          loop
          autoPlay
          style={{ objectFit: "cover" }}
          height="100%"
          width="100%"
        >
          <source src={videoSrcURL} type="video/webm" />
        </video>
      ) : (
        <div className="content" style={{}}>
          <h1 className="header">{heading}</h1>
          <p className="text">{paragraph}</p>
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore
          </a>
        </div>
      )}
    </div>
  )
}

export default Card
