import { Props } from "./Emojis";

export const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap = {
    3: { src: "meh", alt: "meh" },
    4: { src: "thumbsUp", alt: "recommended" },
    5: { src: "bullsEye", alt: "exceptional" },
  };

  return <Image></Image>;
};
