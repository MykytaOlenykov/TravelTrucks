export const emailService = {
  async sendEmail({ data }) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "ok" });
      }, 3000);
    });

    const result = await promise;
    console.log(data);

    return result;
  },
};
