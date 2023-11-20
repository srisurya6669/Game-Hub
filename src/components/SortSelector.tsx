import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Newest First</MenuItem>
        <MenuItem>Date Added</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
