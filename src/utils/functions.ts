const hasEmptyFields = (object: any) =>
  Object.keys(object).some((key) => !object[key]);

export { hasEmptyFields };
