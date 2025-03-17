import { useState } from "react";
import { Modal } from "../modal";
import { serverCheck } from "../../services/methods";

import "./style.css";

export const Announcement = ({ setServerStatusChecked }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleServerCheck = async () => {
    try {
      await serverCheck();
      localStorage.setItem("isServerStatusChecked", JSON.stringify(true));
      setServerStatusChecked(true);
    } catch (err) {
      console.log("🚀 ~ handleServerCheck ~ err:", err);
    }
  };
  return (
    <>
      <Modal>
        <div>
          <h3>! Important Note</h3>
          <p>
            NodeJS Backend is deployed in render.com so, it takes
            <b> some time for initial connection to run.</b>
          </p>
          <p>
            Because I have used <b>free trial account in render </b>for
            Deployment.
          </p>
          <p>
            You can check the server status by clicking the{" "}
            <b className="text-warning">Check server connection </b>
            button.
          </p>
          <div>
            {isClicked ? (
              <p className="status-check-text">Checking Server Status...</p>
            ) : (
              <button
                className="check-server-btn"
                onClick={() => {
                  setIsClicked(true);
                  handleServerCheck();
                }}
              >
                Check server connection
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
