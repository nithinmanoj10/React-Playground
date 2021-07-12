import React from "react";

function ContactsCard(props) {
  console.log(props);

  return (
    <div className="contacts-card">
      <img
        src={props.contact.imageURL}
        alt={props.contact.name}
        className="contacts-card__image"
      />
      <h2 className="contacts-card__name">{props.contact.name}</h2>
      <p className="contacts-card__phone-number">
        Phone : {props.contact.phone}
      </p>
      <p className="contacts-card__mail">Email: {props.contact.email}</p>
    </div>
  );
}

export default ContactsCard;
