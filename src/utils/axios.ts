import axios from "axios";
const apiDB = axios.create({
  baseURL: "https://conectadas-5487f-default-rtdb.firebaseio.com",
});
export { apiDB };
