export default function setData(obj) {
  const data = [];
  for (let key in obj) {
    data.push(key);
  }
  return data;
}
