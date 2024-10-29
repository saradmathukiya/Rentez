import React from "react";
import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI";
import IconBtn from "../../../common/IconBtn";

import { toast } from "react-hot-toast";

const ChangeProfilePicture = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      previewFile(file);
    }else {
      toast.error("Please select an image.");
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileUpload = () => {
    if (!imageFile) {
      toast.error("Please select an image.");
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("displayPicture", imageFile);
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false);
        // Clear the imageFile state after successful upload
      setImageFile(null);
      });
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile);
    }
  }, [imageFile]);

  return (
    <>
      <div className="custom-container">
        <div className="custom-sub-container">
          <img
            src={previewSource || user?.image}
            alt={`profile-${user?.firstName}`}
            className="custom-image"
          />
          <div className="custom-content">
            <p>Change Profile Picture</p>
            <div className="button-div">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="custom-file-input"
                accept="image/png, image/gif, image/jpeg"
              />
              <button
                onClick={handleClick}
                disabled={loading}
                className="select-button"
              >
                Select
              </button>
              <IconBtn
                text={loading ? "Uploading..." : "Upload"}
                onclick={handleFileUpload}
              >
                {!loading && <FiUpload className="custom-icn" />}
              </IconBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeProfilePicture;
