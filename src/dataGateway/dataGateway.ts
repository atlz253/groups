import abstractGateway from "./abstractGateway/abstractGateway";
import mockGateway from "./mockGateway/mockGateway";

class dataGateway {
  private static gateway: abstractGateway = new mockGateway();

  public static setGateway(dataGateway: abstractGateway) {
    this.gateway = dataGateway;
  }

  public static async getGroups() {
    return this.gateway.getGroups();
  }
}

export default dataGateway;
