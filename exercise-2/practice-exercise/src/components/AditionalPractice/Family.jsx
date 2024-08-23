import FamilyItem from "./FamilyItem";

const Family = ({ array }) => {
    return (
        <div>
            {array.map((person, index) => (
                <FamilyItem key={index} person={person} />
            ))}
        </div>
    );
};

export default Family;
