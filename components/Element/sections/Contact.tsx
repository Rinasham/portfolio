import { contacts } from '../../../data';
import { Flex, SectionLayouts, Title } from '../Layout';
import { ContactCard } from '../Layout/ContactCard';

export const Contact = () => {
  return (
    <SectionLayouts id="contact">
      <Title>CONTACT</Title>
      <Flex className="justify-between">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.title}
            title={contact.title}
            icon={contact.icon}
            url={contact.url}
          />
        ))}
      </Flex>
    </SectionLayouts>
  );
};
