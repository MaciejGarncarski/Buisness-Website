const variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.75,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const item = {
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { x: 20, rotate: 5, opacity: 0 },
};

export { variants, item };
