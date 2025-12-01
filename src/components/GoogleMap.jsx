import React from 'react';

const GoogleMap = () => {
  return (
    <div className=" shadow-2xl overflow-hidden  border-gray-200 dark:border-gray-700">
      <iframe
        title="Samprakshiinfinity Solution Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.595110657241!2d75.90306607523872!3d22.807968179337316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631db8b3c35651%3A0xd4cf38892f387052!2sInfinity%20Solution!5e0!3m2!1sen!2sin!4v1717423593005!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
