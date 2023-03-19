import React, { useEffect, useState } from 'react';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { Modal } from '../Modal/Modal';
import { BtnList, Element, ElementString } from './ElementList.styled';
import Avatar from 'react-avatar';
import ModalForm from '../ModalForm/ModalForm';

const ElementList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActiveContact, setIsActiveContact] = useState(0);

  const activeContact = contacts.find(
    contact => contact.id === isActiveContact
  );

  const makeActiveContact = id => {
    setIsActiveContact(id);
  };

  const toggleOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModalContact = event => {
    if (event.target.nodeName === 'BUTTON') {
      setIsModalOpen(true);
    }
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
          <Element key={id} onClick={() => makeActiveContact(id)}>
            <Avatar
              color={Avatar.getRandomColor('sitebase', [
                'LightSeaGreen',
                'BlueViolet',
                'DeepSkyBlue',
              ])}
              name={name}
              round={true}
            />
            {name}: {number}
            <BtnList type="submit" onClick={openModalContact}>
              Update
            </BtnList>
            <BtnList
              type="submit"
              onClick={() => {
                dispatch(contactsOperations.deleteContact(id));
              }}
            >
              Delete
            </BtnList>
            {isModalOpen && (
              <Modal onClose={toggleOpen}>
                <ModalForm activeContact={activeContact} onClose={toggleOpen}/>
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
