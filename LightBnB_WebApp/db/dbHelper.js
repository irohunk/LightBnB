const addFilter = (options, queryParams, queryString, field, operator, value, isNumeric = false, convertUnit = false) => {
  if (options[value] !== undefined) {
    const paramValue = convertUnit ? options[value] * 100 : options[value];
    queryParams.push(paramValue);
    queryString += `${queryParams.length === 1 ? 'WHERE' : 'AND'} ${field} ${operator} $${queryParams.length} `;
  }
  return queryString;
};

module.exports = { addFilter }