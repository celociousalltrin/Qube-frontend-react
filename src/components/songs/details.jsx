import {
  convertNumToDurInText,
  formatDate,
  strAppendFn,
} from "../../utils/common";

export const Details = ({ data }) => {
  const metaSongDetails = data?.meta_song_data;
  return (
    <div className="detail-container">
      <div>
        Artist
        <p>{data.artist_name}</p>
      </div>
      <div>
        Type
        <p>{data.alb_type}</p>
      </div>
      <div>
        Song Count
        <p>{metaSongDetails ? metaSongDetails.count : "-"}</p>
      </div>
      <div>
        Total Size
        <p>{metaSongDetails ? strAppendFn(metaSongDetails.size) : "-"}</p>
      </div>
      <div>
        Total Duration
        <p>
          {metaSongDetails
            ? convertNumToDurInText(metaSongDetails.duration)
            : "-"}
        </p>
      </div>
      <div>
        Realeased On
        <p>{formatDate(data.alb_released_on).split(",")[0]}</p>
      </div>
    </div>
  );
};
