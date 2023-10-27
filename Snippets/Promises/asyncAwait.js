function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404

async function loadJsonAsyncAwait(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  }
  throw new Error(response.status);
}

loadJsonAsyncAwait("https://javascript.info/no-such-user.json").catch(alert); // Error: 404
