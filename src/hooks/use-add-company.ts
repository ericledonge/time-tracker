import { apiClient } from "../services";
import { Company } from "../models";

export const useAddCompany = () => {
  return async (company: Company) => {
    try {
      const { data, error } = await apiClient
        .from("companies")
        .insert({ name: company.name });
      if (data) {
        console.log(data);
      }
      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };
};
