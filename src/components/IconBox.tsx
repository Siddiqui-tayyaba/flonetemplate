import React from 'react';

interface IconBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconBox: React.FC<IconBoxProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-4">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default IconBox;
