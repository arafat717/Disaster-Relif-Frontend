import { jwtDecode } from "jwt-decode";

export const VarifayToken = (token) => {
  return jwtDecode(token);
};
