import { Fragment } from "react";

import Box from "../box";
import Heading from "../heading";

import "./index.css";

export default function NearbyAttractions({ list }) {
  return (
    <Box className="attractions__block" shadow>
      <Heading border>Пам'ятки поблизу</Heading>

      {list.map(({ id, ...rest }) => (
        <Fragment key={id}>
          <Item {...rest} />
        </Fragment>
      ))}
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <a href={link} className="attraction__link">
      {name}
    </a>
  );
}
