console.log("hello admin!");

const url = "http://3.65.149.62/test-api/auth/login";
const urlGetContact = "http://3.65.149.62/test-api/contacts";

async function authorization(link) {
  let data = {
    email: "test@nyblecraft.com",
    password: "12345678qQ",
  };

  let response = await fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let result = await response.json();
  sessionStorage.setItem("res", result.accessToken);
  console.log(sessionStorage.getItem("res"));
}

async function getContact(token) {
  let response = await fetch(urlGetContact, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  let result = await response.json();
  console.log(result);
}

async function main() {
  await authorization(url);
  let token = sessionStorage.getItem("res");
  await getContact(token);
}
main();

