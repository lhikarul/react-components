const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function delay(ms: number) {
  return new Promise((resovle) => setTimeout(resovle, ms));
}

export default async function customFetch(...args: any[]) {
  await delay(Math.ceil(400 + Math.random() * 300));
  //@ts-ignore
  const res = await fetch(...args);
  const json = await res.json();
  const result = json.results ?? [];

  result.push({
    name: characters.slice(0, Math.floor(Math.random() * 50)),
    url: "https://test.com",
  });
  return result;
}
