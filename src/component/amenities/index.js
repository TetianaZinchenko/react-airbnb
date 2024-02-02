import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./wifi.svg";
import pets from "./pets.svg";
import shuttle from "./shuttle.svg";
import concierge from "./concierge.svg";
import roomservice from "./roomservice.svg";
import child from "./child.svg";

export default function Amenities({ title, children }) {
  return (
    <Box className="amenities" shadow>
      <Heading border>{title}</Heading>

      {children.hasPool && (
        <ListItem imageSrc={pool}>
          <span>Басейн</span>
        </ListItem>
      )}

      {children.hasGym && (
        <ListItem imageSrc={gym}>
          <span>Спортивний зал</span>
        </ListItem>
      )}

      {children.hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}

      {children.hasFreeWiFi && (
        <ListItem imageSrc={wifi}>
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}

      {children.hasParking && (
        <ListItem imageSrc={parking}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}

      {children.hasPetsAllowed && (
        <ListItem imageSrc={pets}>
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      )}

      {children.hasAirportShuttle && (
        <ListItem imageSrc={shuttle}>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}

      {children.hasConciergeService && (
        <ListItem imageSrc={concierge}>
          <span>Консьєрж-сервіс</span>
        </ListItem>
      )}

      {children.hasRoomService && (
        <ListItem imageSrc={roomservice}>
          <span>Обслуговування номерів</span>
        </ListItem>
      )}

      {children.hasChildFriendly && (
        <ListItem imageSrc={child}>
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </Box>
  );
}
