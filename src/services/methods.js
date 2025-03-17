import axios from "./axios-utils";

//Albums APIs
export const getAllAlbums = () => axios.get("/album");

//Songs APIs
export const getAllSongsByAlbumId = (id) => axios.get(`song/${id}`);

//SERVER CHECK
export const serverCheck = () => axios.get("/server-check");
