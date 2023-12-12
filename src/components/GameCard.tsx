import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCropedImageURL from "../services/image-url";
import Emojis from "./Emojis";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card cursor="pointer">
        <Image src={getCropedImageURL(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="2xl">
            <Link to={"/games/" + game.slug}>{game.name}</Link>
            <Emojis rating={game.rating_top}></Emojis>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
