import { useState } from "react";

import { FaSearch, FaChevronDown } from "react-icons/fa";
import { TiEye } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useFetch } from "../../custom-hooks/useFetch";

import { getAllAlbums } from "../../services/methods";

import { SpreadSheet } from "../../components/spreadsheet";
import { AppPopover } from "../app-popover";

import { ALBUM_KEYS, albumListHeader } from "../../utils/constant";

import "./style.css";

export const Albums = () => {
  const navigate = useNavigate();

  const { isFetched, response, error } = useFetch(getAllAlbums);

  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedtype] = useState([]);
  const [isOpenPopover, setIsOpenPopover] = useState(false);

  if (error) {
    toast.error(error);
  }
  const handleNavigate = (id) => {
    navigate(`/home/${id}`);
  };

  const filteredData = (data, text, type) =>
    data
      ?.filter(({ alb_name }) =>
        alb_name.toLowerCase().includes(text.toLowerCase())
      )
      ?.filter(
        ({ alb_type }) =>
          !selectedType.length || selectedType.includes(alb_type)
      );

  const renderAlbumNameMarkUp = (field, data) => {
    return (
      <div className="album-name-container">
        <p>{data[field]}</p>
        <p className="album-artist-name">{data.artist_name}</p>
      </div>
    );
  };

  const renderActionButtonMarkup = (field, data) => {
    return (
      <div
        className="action-button-container"
        onClick={() => handleNavigate(data._id)}
      >
        <TiEye />
        <span>View Details</span>
      </div>
    );
  };

  const renderMarkup = (field, data) => {
    switch (field) {
      case ALBUM_KEYS.NAME:
        return renderAlbumNameMarkUp(field, data);
      case ALBUM_KEYS.ACTION_BUTTON:
        return renderActionButtonMarkup(field, data);
      default:
        return <p>Please Define the Correct Key for Slot</p>;
    }
  };

  const handleCheck = (value) => {
    setSelectedtype((prev) =>
      prev.includes(value) ? prev.filter((o) => o !== value) : [...prev, value]
    );
  };

  const SpreadSheetContainerheaderMarkup = () => {
    return (
      <div className="spreadsheet-header-Container">
        <div className="album-input-conatiner">
          <input
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="search-icon-container">
            <FaSearch size={16} color="#677a90" />
          </span>
        </div>
        <div className="album-popover-container">
          <p
            className="popover-title"
            onClick={() => setIsOpenPopover((val) => !val)}
          >
            Type
            <FaChevronDown />
          </p>
          {isOpenPopover && (
            <div className="album-popover">
              <AppPopover
                selectedType={selectedType}
                handleCheck={handleCheck}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="album-heading-container">
        <h1 className="album-heading">Overview</h1>
      </div>
      <div>
        <SpreadSheet
          header={albumListHeader}
          data={filteredData(response, searchText, selectedType)}
          isFetched={isFetched}
          renderCompSlot={SpreadSheetContainerheaderMarkup}
          renderSlot={(field, album) => renderMarkup(field, album)}
        />
      </div>
    </>
  );
};
