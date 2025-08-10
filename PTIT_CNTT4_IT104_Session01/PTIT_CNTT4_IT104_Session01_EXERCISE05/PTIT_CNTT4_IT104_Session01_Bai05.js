const response = {
  data: {
    id: 1,
    title: "Destructuring in JavaScript",
    author: {
      name: "Dev",
      email: "Dev@gmail.com",
    },
  },
};

function extractData({ data }) {
  const { title, author } = data;
  const { name: authorName, email: authorEmail } = author;

  console.log("Title:", title);
  console.log("Author Name:", authorName);
  console.log("Author Email:", authorEmail);
}

extractData(response);
