import { GroupsFilters } from "../groups/GroupsFilters";
import abstractGateway from "./abstractGateway/abstractGateway";
import mockGateway from "./mockGateway/mockGateway";

class dataGateway {
  private static gateway: abstractGateway = new mockGateway();

  public static setGateway(dataGateway: abstractGateway) {
    this.gateway = dataGateway;
  }

  public static async getGroups(params?: GroupsFilters) {
    return this.gateway.getGroups(params);
  }
}

export default dataGateway;
