import { useQuery } from "@tanstack/react-query";
import platforms from "../components/data/platformData";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: platforms,
    staleTime: ms("24h"),
  });

export default usePlatforms;
