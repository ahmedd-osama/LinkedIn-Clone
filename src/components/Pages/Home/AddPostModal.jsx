import { Button, Modal, Stack } from "react-bootstrap";
import classes from "./Home.module.css";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../UI/Styled-UI/StyledElements";
import { useState } from "react";
import ReactPlayer from "react-player";
const AddPostModal = ({ show, handleClose, user }) => {
  const [assetArea, setAssetArea] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [imageURL, setImageURL] = useState('');
  const [postDetails, setPostDetails] = useState("");
  const reset = ()=>{
    setAssetArea('');
    setVideoURL('');
    setImageURL('');
    setPostDetails('');
  }
  return (
    <Modal show={show} onHide={()=>{handleClose(); reset();}} size="md"  >
      <Modal.Header closeButton>
        <Modal.Title className="text-gray-900">Create a post!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack
          gap={1}
          className={"align-items-center ps-4"}
          direction="horizontal"
        >
          <img
            src={user?.photoURL || "/images/user.svg"}
            className={"rounded-circle"}
            width={"40px"}
            alt=""
          />
          <h5>{user?.displayName || "no name found"}</h5>
        </Stack>
        <Stack className={classes["asset-area"]} gap={2}>
          {/* post details */}
          <textarea
            autoFocus={true}
            name="post details"
            id="post-details"
            cols="30"
            rows="5"
            value={postDetails}
            onChange={(e) => {
              setPostDetails(e.target.value);
            }}
            placeholder="What do you want to talk about?"
          />

          {/* video */}
          {assetArea === "video" && (
            <input
              type="text"
              placeholder="Youtube video link"
              className="w-100 mb-3"
              value={videoURL}
              onChange={(e) => {
                setVideoURL(e.target.value);
              }}
            />
          )}
          {assetArea === "video" && videoURL && (
            <ReactPlayer width="100%" url={videoURL} />
          )}
          {/* image */}
          {assetArea === "image" && (
            <>
              <input
                type="file"
                name="image"
                id="file"
                className="d-none"
                value={imageURL}
                onChange={(e) => {
                  setImageURL(e.target.value);
                }}
              />
              <p>
                <label
                  htmlFor="file"
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  className={"text-center w-100 "}
                >
                  Select an image to share
                </label>
              </p>
            </>
          )}
          {assetArea === "image" && imageURL && (
            <img src={imageURL  } alt="post image" />
          )}
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Stack direction="horizontal" className={"justify-content-start w-100"}>
          <ButtonSecondary onClick={() => setAssetArea("image")}>
            <img src="/images/share-image.svg" alt="Share Image" />
          </ButtonSecondary>
          <ButtonSecondary onClick={() => setAssetArea("video")}>
            <img src="/images/share-video.svg" alt="Share Video" />
          </ButtonSecondary>
          <ButtonPrimary
            className="ms-auto"
            disabled={postDetails.length === 0}
            onClick={() => console.log("posint")}
          >
            Post
          </ButtonPrimary>
        </Stack>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPostModal;
