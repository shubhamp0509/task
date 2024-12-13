import { config } from "./config";
import { User } from "./models";
import axios from "axios";

async function fetchUsers() {
  for (let i = 0; i < config.requestPerBatch; i++) {
    const response = await axios.get(`${config.apiUrl}?results=5000`);
    await User.insertMany(response.data.results);

    if ((i + 1) % config.requestPerSecond === 0) {
      await new Promise((resolve) => setTimeout(resolve, config.sleepTime));
    }
  }
}

export { fetchUsers };
