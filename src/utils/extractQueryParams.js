export function extractQueryParams(query) {
  return query
    .slice(1) // Remove the leading "?"
    .split("&") // Split into ["status=closed"]
    .reduce((queryParams, param) => {
      // Split each key-value pair (e.g., "status=closed" -> ["status", "closed"])
      const [key, value] = param.split("=");

      // Add the key-value pair to the accumulator object
      queryParams[key] = value;

      // Return the accumulator for the next iteration
      return queryParams;
    }, {}); // Start with an empty object as the initial value
}
