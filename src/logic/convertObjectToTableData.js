export const convertObjectToTableData = (data) => {
  if (!data) {
    return null;
  }
  const dataIntoArray = Object.entries(data);
  return dataIntoArray.map(([id, value]) => {
    const object = { id, value };
    return object;
  });
};
