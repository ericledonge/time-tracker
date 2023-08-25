import { useEffect, useState } from "react";

import { apiClient } from "../services";
import { Company } from "../models";

export const useGetCompanies = () => {
  const [companies, setCompanies] = useState<string[]>([]);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const { data, error } = await apiClient.from("Company").select();
        if (data) {
          const mappedData = data.map((company: Company) => company.name);
          setCompanies(mappedData);
        }
        if (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCompanies();
  }, []);

  return { companies };
};
