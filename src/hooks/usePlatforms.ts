import useData from "./useData";
import platforms from "../components/data/platformData";
interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: platforms,
  error: null,
});

export default usePlatforms;
