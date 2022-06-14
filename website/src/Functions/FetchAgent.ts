type mailData = {
  name: string;
  email: string;
  text: string;
};

class fetchAgent {
  async SendMail(data: mailData) {
    return await fetch("http://localhost:3001/mail/post", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

const FetchAgent = new fetchAgent();

export { FetchAgent };
