import api from "./api";

export const AuthService = {
  registerIndividual: (data: any) =>
    api.post("/auth/register/individual", data),

  registerSyndicate: (data: any) =>
    api.post("/auth/register/syndicate", data),
};
