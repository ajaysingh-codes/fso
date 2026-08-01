const Persons = ({ personsToShow, handleDelete }) => {
    return (
        <div>
            {personsToShow.map(person => (
                <div key={person.id}>
                    <p style={ {display: 'inline'} }>
                        {person.name} {person.number}
                    </p>
                    <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
                </div>
                ))}
        </div>
    )
}

export default Persons