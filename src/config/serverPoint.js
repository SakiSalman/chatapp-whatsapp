import serverCredential from "./serverCredential.json";

export const server = pointServer();

function pointServer() {
  return serverCredential.staging.STAGING_SERVER_HOST; //20240206
  //MacPharms-Dev002
  // return serverCredential.server.SERVER_HOST;
}