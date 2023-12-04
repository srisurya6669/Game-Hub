import { useQuery } from "@tanstack/react-query";
import platforms from "../components/data/platformData";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platforms>>("/platforms/lists/parents")
        .then((res) => res.data),
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
