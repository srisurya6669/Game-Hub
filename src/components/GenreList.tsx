import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedImageURL from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="5px" overflow={"hidden"}>
            <HStack>
              <Image
                boxSize="50px"
                borderRadius={8}
                src={getCropedImageURL(genre.image_background)}
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                fontWeight={genre.id == selectedGenre?.id ? "bold" : ""}
                fontStyle={genre.id == selectedGenre?.id ? "italic" : ""}
                variant="link"
                fontSize="lg"
              >
                {genre.name == "Massively Multiplayer"
                  ? "Multiplayer"
                  : genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
