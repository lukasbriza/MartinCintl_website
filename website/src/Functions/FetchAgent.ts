import env from "react-dotenv";

type mailData = {
  name: string;
  telephone: string;
  text: string;
  option: string;
};

class fetchAgent {
  SendMail(data: mailData) {
    fetch("http://89.221.218.247:3001/mail/post", {
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
