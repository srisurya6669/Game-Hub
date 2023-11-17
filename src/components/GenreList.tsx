import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCropedImageURL from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres<Genre>("/genres");

  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="50px"
                borderRadius={8}
                src={getCropedImageURL(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
