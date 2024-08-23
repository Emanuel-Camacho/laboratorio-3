import PersonItem from "./PersonsItem";

const Persons = ({ array }) => {
    const personsFiltered = array.filter((name) => name.charAt(0) === "P" || name.charAt(0) === "p");

    return (
        <div>
            {personsFiltered.map((name, index) => (
                <PersonItem key={index} name={name} />
            ))}
        </div>
    );
};

export default Persons;
