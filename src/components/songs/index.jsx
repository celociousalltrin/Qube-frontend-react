import { useNavigate, useParams } from "react-router-dom";
import { PiCaretRightBold } from "react-icons/pi";
import toast from "react-hot-toast";

import { useFetch } from "../../custom-hooks/useFetch";

import { getAllSongsByAlbumId } from "../../services/methods";

import { SONGLISTHEADER } from "../../utils/constant";

import { SpreadSheet } from "../spreadsheet";
import { Details } from "./details";

import "./style.css";

export const Songs = () => {
  const { id } = useParams();
  const { isFetched, response, error } = useFetch(getAllSongsByAlbumId, id);
  const navigate = useNavigate();
  if (error) {
    toast.error(error);
  }
  const handleNavigate = () => {
    navigate(`/home`);
  };
  return (
    <>
      <div>
        {isFetched && (
          <>
            <div className="breadcrumb-container">
              <p onClick={handleNavigate} className="breadcrumb1">
                Overview
              </p>
              <p className="breadcrumb-icon">
                <PiCaretRightBold size={14} />
              </p>
              <p>{response.alb_name}</p>
            </div>
            <div className="song-heading-Container">
              <h1>{response.alb_name}</h1>
            </div>
            <Details data={response} />
          </>
        )}
      </div>

      <div>
        <SpreadSheet
          header={SONGLISTHEADER}
          isFetched={isFetched}
          data={response.songs_list}
        />
      </div>
    </>
  );
};
