function promiseResolveTimeout<T>(
  resolveData: T,
  timeout: number = 1000
): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resolveData);
    }, timeout);
  });
}

export default promiseResolveTimeout;
