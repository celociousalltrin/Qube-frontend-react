import { convertNumToDur, formatDate, strAppendFn } from "./common";

export const ALBUM_KEYS = {
  NAME: "alb_name",
  TYPE: "alb_type",
  RELEASED_ON: "alb_released_on",
  ACTION_BUTTON: "action_button",
};

export const SONGS_KEYS = {
  NAME: "song_name",
  PERFORMER: "song_performer_name",
  DURATION: "song_duration",
  SIZE: "alb_size",
};

export const SpreadSheetCelltype = {
  STRING: "string",
  NUMBER: "number",
  SLOT: "slot",
  DATE: "date",
};

export const albumListHeader = [
  {
    field: ALBUM_KEYS.NAME,
    name: "Collection Name",
    type: SpreadSheetCelltype.SLOT,
    width: "30%",
  },
  {
    field: ALBUM_KEYS.TYPE,
    name: "Type",
    type: SpreadSheetCelltype.STRING,
    width: "10%",
  },
  {
    field: "result.count",
    name: "Song Count",
    isNested: true,
    type: SpreadSheetCelltype.NUMBER,
    width: "10%",
  },
  {
    field: "result.duration",
    name: "Duration",
    isNested: true,
    type: SpreadSheetCelltype.STRING,
    formatFn: convertNumToDur,
    width: "10%",
  },
  {
    field: "result.size",
    name: "Size",
    isNested: true,
    type: SpreadSheetCelltype.STRING,
    formatFn: strAppendFn,
    width: "10%",
  },
  {
    field: ALBUM_KEYS.RELEASED_ON,
    name: "Realeased On",
    type: SpreadSheetCelltype.DATE,
    formatFn: formatDate,
    width: "15%",
  },
  {
    field: ALBUM_KEYS.ACTION_BUTTON,
    name: "",
    type: SpreadSheetCelltype.SLOT,
    width: "25%",
  },
];

export const albumTypeOptions = [
  { label: "Album", value: "Album" },
  { label: "Single", value: "Single" },
  { label: "EP", value: "EP" },
];

export const SONGLISTHEADER = [
  { field: SONGS_KEYS.NAME, name: "Song", width: "30%" },
  { field: SONGS_KEYS.PERFORMER, name: "Performers", width: "30%" },
  {
    field: SONGS_KEYS.DURATION,
    name: "Duration",
    formatFn: convertNumToDur,
    width: "20%",
  },
  { field: SONGS_KEYS.SIZE, name: "Size", formatFn: strAppendFn, width: "20%" },
];
