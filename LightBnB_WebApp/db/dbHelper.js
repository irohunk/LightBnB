const addFilter = (options, queryParams, queryString, field, operator, valueKey) => {
  if (options[valueKey]) {
    queryParams.push(options[valueKey]);
    queryString += `${queryParams.length === 1 ? 'WHERE' : 'AND'} ${field} ${operator} $${
      queryParams.length
    } `;
  }
  return queryString;
};

module.exports = { addFilter }