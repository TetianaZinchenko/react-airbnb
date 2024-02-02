import { Fragment } from "react";

import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function GuestReviews({ list }) {
  return (
    <div className="guest-reviews__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="guest-reviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="guest">
      <div className="guest__main">
        <span className="guest__name">{guestName}</span>
        <span className="guest__rating">Рейтинг: {rating}</span>
      </div>
      <span className="guest__review">{review}</span>
    </Box>
  );
}
