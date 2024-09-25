import axios from "axios";

const patch = async (url: string) => {
  return await axios.patch(url).then((res) => res.data);
};

export default patch;
