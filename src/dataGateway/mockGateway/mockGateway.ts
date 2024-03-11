import Group from "../../group/Group";
import promiseResolveTimeout from "../../utils/promiseResolveDelay";
import GatewayResponse from "../abstractGateway/GatewayResponse";
import abstractGateway from "../abstractGateway/abstractGateway";
import groups from "./groups";

class mockGateway extends abstractGateway {
  private readonly requestDelayMilliseconds: number;

  constructor(requestDelayMilliseconds: number = 1000) {
    super();

    this.requestDelayMilliseconds = requestDelayMilliseconds;
  }

  public async getGroups() {
    const data: GatewayResponse<Group[]> = {
      result: 1,
      data: groups,
    };

    return promiseResolveTimeout(data, this.requestDelayMilliseconds);
  }
}

export default mockGateway;
