import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const gameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default gameScreenshots;
