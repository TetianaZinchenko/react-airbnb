import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function AdditionalProperties({
  title,
  rules,
  policy,
  transportation,
  languages,
  offers,
  checkin,
}) {
  return (
    <Box className="property" shadow>
      <Heading border>{title}</Heading>

      <ListItem title="Правила дому">
        <span>{rules}</span>
      </ListItem>

      <ListItem title="Політика скасування">
        <span>{policy}</span>
      </ListItem>

      <ListItem title="Місцевий транспорт">
        <span>{transportation}</span>
      </ListItem>

      <ListItem title="Мови хоста">
        <span>{languages.join(", ")}</span>
      </ListItem>

      <ListItem title="Спеціальні пропозиції:">
        <span>{offers}</span>
      </ListItem>

      <ListItem title="Інструкції щодо реєстрації">
        <span>{checkin}</span>
      </ListItem>
    </Box>
  );
}
