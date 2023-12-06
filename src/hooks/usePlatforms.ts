import { useQuery } from "@tanstack/react-query";
import platforms from "../components/data/platformData";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: platforms,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
