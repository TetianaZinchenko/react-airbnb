import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

import guests from "./guests.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function PropertyDetails({ title, children }) {
  return (
    <Box className="property" shadow>
      <Heading border>{title}</Heading>

      <ListItem imageSrc={guests}>
        <span>{children.guests} гості</span>
      </ListItem>

      <ListItem imageSrc={bedroom}>
        <span>{children.bedrooms} спальня</span>
      </ListItem>

      <ListItem imageSrc={bed}>
        <span>{children.beds} ліжко</span>
      </ListItem>

      <ListItem imageSrc={bathroom}>
        <span>{children.baths} ванна кімната</span>
      </ListItem>
    </Box>
  );
}
