import React from 'react';

interface Service {
  icon: React.ReactElement;
  title: string;
  context: string;

}


const ServiceCard: React.FC<Service> = ({ icon, title, context }) => {
  
    return (
      <div>
      {icon}
      <h3 className="text-lg font-semibold my-2">{title}</h3>
      <p className="text-gray-300">{context}</p>
    </div>
    );
  };
  
  export default ServiceCard;
