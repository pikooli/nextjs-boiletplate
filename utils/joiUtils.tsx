const getErrors = (errors: Obj) => {
  const res: Obj = {};
  for (let i = 0; i < errors.length; i++) {
    res[errors[i].path] = errors[i].message;
  }
  return res;
};

const error_messages = ({
  ns,
  field,
  type
}: {
  ns?: string;
  field: string;
  type: string;
}) => ({
  [`${type}.base`]: `errors.${ns ? ns + '.' : ''}${field}.${field}`,
  [`${type}.empty`]: `errors.${ns ? ns + '.' : ''}${field}.empty`,
  [`${type}.required`]: `errors.${ns ? ns + '.' : ''}${field}.required`,
  [`any.required`]: `errors.${ns ? ns + '.' : ''}${field}.required`
});

export default {
  getErrors,
  error_messages
};
