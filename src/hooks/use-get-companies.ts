import { useEffect, useState } from "react";

import { apiClient } from "../services";

export const useGetCompanies = () => {
  const [companies, setCompanies] = useState<string[]>([]);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const { data, error } = await apiClient.from("companies").select();
        if (data) {
          const mappedData = data.map((company) => company.name);
          setCompanies(mappedData);
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCompanies();
  }, []);

  return { companies };
};
