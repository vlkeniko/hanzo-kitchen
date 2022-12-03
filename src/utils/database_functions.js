export let endpoint =
  "https://hanzolist-b6cc3-default-rtdb.europe-west1.firebasedatabase.app/";

  export async function getFromEndpoint(url) {
    const response = await fetch(url);
    const data = await response.json();
    let result = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    return result;
  }