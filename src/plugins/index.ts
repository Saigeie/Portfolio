import axios from "axios";

export const GetProjects = async () => {
  let ResponseAmount = 0;
  const MyData = await(
    await axios.get("https://api.github.com/users/Saigeie/repos", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
      },
    })
  ).data;
  const RubyBotsData = await(
    await axios.get("https://api.github.com/orgs/Ruby-Bots/repos", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
      },
    })
  ).data;

  console.log(MyData, RubyBotsData);
  if (MyData) {
    ResponseAmount = ResponseAmount + MyData.length;
  }
  if (RubyBotsData) {
    ResponseAmount = ResponseAmount + RubyBotsData.length;
  }
  return ResponseAmount;
}