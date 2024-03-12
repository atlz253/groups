const errorMessages = {
  getMethodNotImplementedErrorMessage: (className: string, methodName: string) =>
    `${className}.${methodName} не реализован`,
} as const;

export default errorMessages;
