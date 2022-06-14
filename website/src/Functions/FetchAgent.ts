type mailData = {
  name: string;
  email: string;
  text: string;
};

class fetchAgent {
  async SendMail(data: mailData) {
    return await fetch("https://www.martincintl.cz/mail/post", {
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
