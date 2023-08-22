interface CardProps {
    icon: React.ReactElement;
    title: string;
    description: string;
}

const AboutCard: React.FC<CardProps> = ({ icon, title, description }) => {
return (
    <div className="p-4 rounded-lg bg-gray-800 bg-opacity-50 shadow-lg">
    {icon}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
    </div>
);
};

export default AboutCard