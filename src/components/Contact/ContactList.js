import React from "react";
import styled from "styled-components";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function ContactList() {
  return (
    <List>
      <ListItem>
        <IoLocationSharp className="contact-list-icon" />
        <ListItemLabel>
          Location:{" "}
          <ListItemLabelText>
            Mississauga, Ontario, Canada, L5C3B2
          </ListItemLabelText>
        </ListItemLabel>
      </ListItem>
      <ListItem>
        <BsFillPhoneVibrateFill className="contact-list-icon" />
        <ListItemLabel>
          Phone: <ListItemLabelText>416-779-2166</ListItemLabelText>
        </ListItemLabel>
      </ListItem>
      <ListItem>
        <MdEmail className="contact-list-icon" />
        <ListItemLabel>
          Email: <ListItemLabelText>mitch.j.rose@outlook.com</ListItemLabelText>
        </ListItemLabel>
      </ListItem>
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: left;
  color: black;
  background-color: white;
  margin-top: 1.7rem;
`;

const ListItem = styled.li`
  text-decoration: none;
  background-color: white;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

const ListItemLabel = styled.span`
  color: black;
  font-size: 1.3rem;
  background-color: white;
  margin-left: 1.4rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ListItemLabelText = styled.span`
  color: black;
  font-size: 1rem;
  background-color: white;
  opacity: 0.7;
`;

export default ContactList;
