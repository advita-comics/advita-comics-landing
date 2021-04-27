export function capitalizeFirstLetter(string) {
  let result;

  if (typeof string === 'string') {
    result = string.charAt(0).toUpperCase() + string.slice(1);
  }

  return result;
}

export default {
  capitalizeFirstLetter,
};
