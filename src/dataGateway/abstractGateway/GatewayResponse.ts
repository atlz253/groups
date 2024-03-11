interface GatewayResponse<T> {
  result: 1 | 0;
  data?: T;
}

export default GatewayResponse;