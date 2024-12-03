// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Santa Rosa Shih Tzu Puppies. All rights reserved.</p>
      <p>
        Contact us: <a href="mailto:santarosashihtzupuppy@gmail.com">santarosashihtzupuppy@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;
