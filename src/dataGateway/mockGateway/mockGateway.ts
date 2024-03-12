import Group from "../../groups/Group";
import { GroupsFilters } from "../../groups/GroupsFilters";
import random from "../../utils/random";
import promiseResolveTimeout from "../../utils/promiseResolveTimeout";
import GatewayResponse from "../abstractGateway/GatewayResponse";
import abstractGateway from "../abstractGateway/abstractGateway";
import filterGroups from "./filterGroups";
import groups from "./groups";

class mockGateway extends abstractGateway {
  private readonly requestDelayMilliseconds: number;

  constructor(requestDelayMilliseconds: number = 1000) {
    super();

    this.requestDelayMilliseconds = requestDelayMilliseconds;
  }

  public async getGroups(params?: GroupsFilters) {
    const data: GatewayResponse<Group[]> = {
      result: random.getInteger(0, 2) as 0 | 1,
      data: params === undefined ? groups : filterGroups(params),
    };

    return promiseResolveTimeout(data, this.requestDelayMilliseconds);
  }
}

export default mockGateway;
