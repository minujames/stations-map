import axios from "axios";

export default {
  getStations() {
    return axios.get("https://api.voltaapi.com/v1/stations");
  }
}