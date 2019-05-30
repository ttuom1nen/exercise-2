import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c315fd36c550ce708920901491dff324863c738286cd81784563eeb4f166e484"
  }
});
