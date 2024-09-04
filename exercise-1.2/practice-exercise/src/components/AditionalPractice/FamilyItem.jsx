const FamilyItem = ({ person }) => {
    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
        </div>
    );
};

export default FamilyItem;
