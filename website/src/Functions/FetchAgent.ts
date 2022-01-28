import env from "react-dotenv";

type mailData = {
  name: string;
  telephone: string;
  text: string;
  option: string;
};

class fetchAgent {
  SendMail(data: mailData) {
    fetch(env.API_URL + "/mail/post", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}

const FetchAgent = new fetchAgent();

export { FetchAgent };
