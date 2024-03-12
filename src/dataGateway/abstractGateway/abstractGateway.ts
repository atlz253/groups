import Group from "../../groups/Group";
import { GroupsFilters } from "../../groups/GroupsFilters";
import errorMessages from "../../utils/errorMessages";
import GatewayResponse from "./GatewayResponse";

class abstractGateway {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async getGroups(_params?: GroupsFilters): Promise<GatewayResponse<Group[]>> {
    throw new Error(
      errorMessages.getMethodNotImplementedErrorMessage(
        abstractGateway.name,
        this.getGroups.name
      )
    );
  }
}

export default abstractGateway;
