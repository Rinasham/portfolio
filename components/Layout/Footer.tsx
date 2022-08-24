import React from 'react';
import { Text } from '../Element/Layout';

export const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="flex justify-center py-5 bg-lightpink text-white">
      <Text>Copyright RINA {CURRENT_YEAR}</Text>
    </footer>
  );
};
