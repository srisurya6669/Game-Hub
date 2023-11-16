import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9ff4199f9425446692fd59103908c5d3",
  },
});
