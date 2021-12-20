import { AiOutlinePhone, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';

const data = [
  {
    href: 'tel:+48000000000',
    title: 'Phone number',
    label: '+48-000-000-000',
    Icon: AiOutlinePhone,
  },
  {
    href: 'mailto:contactemail@email.com',
    title: 'Business email',
    label: 'contactemail@email.com',
    Icon: AiOutlineMail,
  },
  {
    href: '#contact',
    title: 'Opened in this hours',
    label: 'Monday - Friday : 8:00-16:00',
    Icon: AiOutlineClockCircle,
  },
];

export { data };
