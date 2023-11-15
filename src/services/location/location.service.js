import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://geocode-3pryqkxixa-uc.a.run.app?city=${searchTerm}`
    //local url http://localhost:5001/mealstogo-b2612/us-central1/geocode
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
