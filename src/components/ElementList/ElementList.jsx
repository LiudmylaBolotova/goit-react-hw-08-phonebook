import React, { useEffect, useState } from 'react';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { Modal } from '../Modal/Modal';
import {
  BtnList,
  StyledBtn,
  Element,
  ContactList,
  ContactItem,
  ElementString,
} from './ElementList.styled';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Avatar from 'react-avatar';
import ModalForm from '../ModalForm/ModalForm';

const ElementList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActiveContact, setIsActiveContact] = useState(0);

  const toggleOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModalContact = event => {
    if (event.target.nodeName === 'BUTTON') {
      setIsModalOpen(true);
    }
  };

  const makeActiveContact = id => {
    setIsActiveContact(id);
  };

  useEffect(() => {
    const controller = new AbortController();

    dispatch(contactsOperations.fetchContacts(), { signal: controller.signal });
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <>
      {findContacts.length > 0 ? (
        findContacts.map(({ name, number, id }) => (
          <Element key={id}>
            <Avatar
              color={Avatar.getRandomColor('sitebase', [
                'LightSeaGreen',
                'BlueViolet',
                'DeepSkyBlue',
              ])}
              name={name}
              round={true}
            />
            <ContactList>
              <ContactItem>{name}:</ContactItem>
              <ContactItem>{number}</ContactItem>
            </ContactList>
            <BtnList>
              <li>
                <StyledBtn
                  type="submit"
                  onClick={openModalContact}
                  onClickCapture={() => {
                    makeActiveContact(id);
                  }}
                >
                  <AiOutlineEdit />
                </StyledBtn>
              </li>
              <li>
                <StyledBtn
                  type="submit"
                  onClick={() => {
                    dispatch(contactsOperations.deleteContact(id));
                  }}
                >
                  <AiOutlineDelete />
                </StyledBtn>
              </li>
            </BtnList>
            {isModalOpen && (
              <Modal onClose={toggleOpen}>
                <ModalForm
                  activeContact={isActiveContact}
                  onClose={toggleOpen}
                />
              </Modal>
            )}
          </Element>
        ))
      ) : (
        <ElementString>
          <p>Your contacts will be displayed here</p>
        </ElementString>
      )}
    </>
  );
};

export default ElementList;
