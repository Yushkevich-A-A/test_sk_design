export default function prepareDataToSend(data) {
  const objectData = {};
  const dataArr = Object.keys(data);
  dataArr.forEach( item => objectData[item] = data[item].value || null);
  return JSON.stringify(objectData);
}