import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImageURL from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="3xl" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px" overflow={"hidden"}>
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize="50px"
                  borderRadius={8}
                  src={getCropedImageURL(genre.image_background)}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => setGenreId(genre.id)}
                  fontWeight={genre.id == selectedGenreId ? "bold" : ""}
                  fontStyle={genre.id == selectedGenreId ? "italic" : ""}
                  variant="link"
                  fontSize="lg"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
