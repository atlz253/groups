import Group from "../../group/Group";
import GatewayResponse from "./GatewayResponse";
import { default as errorMessages } from "./errorMessages";

class abstractGateway {
  public async getGroups(): Promise<GatewayResponse<Group[]>> {
    throw new Error(
      errorMessages.getMethodNotImplementedErrorMessage(
        abstractGateway.name,
        this.getGroups.name
      )
    );
  }
}

export default abstractGateway;
