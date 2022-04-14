function omit(data, keysToOmit) {
  if (typeof data !== 'object' || !keysToOmit) return data;

  const parsedKeysToOmit = Array.isArray(keysToOmit) ? keysToOmit : [keysToOmit];

  const newData = Object.keys(data).reduce((acc, key) => {
    if (!parsedKeysToOmit.includes(key)) {
      acc[key] = data[key];
    }

    return acc;
  }, {});

  return newData;
}

export default omit;
