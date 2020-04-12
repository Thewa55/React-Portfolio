import axios from "axios"

export default {
  getGitHubRepo: function () {
    return axios.get("https://api.github.com/users/thewa55/repos?per_page=100")
  }
}