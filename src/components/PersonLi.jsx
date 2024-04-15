import { ButtonDelete } from "./ButtonDelete";

const styles = {
    listItem: {
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    section: {
        display: 'flex',
        alignItems: 'center',
    },
    span: {
        marginRight: '10px',
    },
}

export const PersonLi = ({ name, number, id, setPersons }) => {
    return (
        <li style={styles.listItem}>
            <section style={styles.section}>
                <span style={styles.span}><b>Name: </b>{name}</span>
                <span style={styles.span}><b>Number: </b>{number}</span>
                <ButtonDelete personId={id} personName={name} setPersons={setPersons} />
            </section>
        </li>
    )
}