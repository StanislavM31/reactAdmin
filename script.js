console.log("hello admin");

const url = "http://3.65.149.62/test-api/auth/login";
const u = 'http://3.65.149.62/test-api/profile';

async function authorization(link){
  let data = {
    "email": "test@nyblecraft.com",
    "password": "12345678qQ"
  };

  let response = await fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  let result = await response.json();
  console.log(result);
  console.log(`accessToken: ${result.accessToken}`);
  console.log(`refreshToken: ${result.refreshToken}`);
  console.log(result.user);
}

authorization(url);




