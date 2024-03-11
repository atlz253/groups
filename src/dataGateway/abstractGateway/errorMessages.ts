export default {
  getMethodNotImplementedErrorMessage: (className: string, methodName: string) =>
    `${className}.${methodName} не реализован`,
} as const;
