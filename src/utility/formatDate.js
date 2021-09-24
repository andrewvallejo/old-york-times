export const formatDate = (date) => {
  const splitDate = date.substring(0, 10).split('-')
  let [year, month, day] = splitDate;
  return `${month}/${day}/${year}`;
}