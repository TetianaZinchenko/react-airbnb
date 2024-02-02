import Heading from "../heading";
import Title from "../title";
import Avatar from "../avatar";

import "./index.css";

export default function ContactInfo({ name, image, rate, time, info, phone }) {
  return (
    <div className="contact">
      <div className="contact__main">
        <Avatar src={image} name={name} />
        <div>
          <Heading>Господар – {name}</Heading>
          <Title phone={phone} time={time} rate={rate} />
        </div>
      </div>

      <p className="contact__info">{info}</p>
    </div>
  );
}
