import "./index.css";

export default function Title({
  title,
  rating,
  review,
  city,
  country,
  superhost,
  phone,
  time,
  rate,
}) {
  return (
    <div className="title">
      <h1 className="title__text">{title}</h1>
      <div className="title__sub-block">
        {rating && <span className="title__sub-value">{rating} рейтинг</span>}

        {review && <span className="title__sub-value">{review} відгуків</span>}

        {city && country && (
          <span className="title__sub-value">
            {city}, {country}
          </span>
        )}

        {superhost && <span className="title__sub-value">Супер-хост</span>}

        {phone && <span className="title__sub-value">{phone}</span>}

        {time && <span className="title__sub-value">{time}</span>}

        {rate && (
          <span className="title__sub-value">
            {rate}% відсотків швидкості відгуку
          </span>
        )}
      </div>
    </div>
  );
}
