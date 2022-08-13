import React from "react";
import { Button } from "style/style";

export const ContactList = ({ data, children, onDeleteItem }) => {
    const deleteContact = (e) => {
        const removedContact = data.filter(item => item.number !== e.target.id)
        onDeleteItem(removedContact)
    }

    return (<>
        <h2>Contacts</h2>
        {children}
        <ul onClick={deleteContact}>
            {data.map((item) =>
                <li key={item.id}> {item.name}: {item.number}
                    <Button type="button" id={item.number} onClick={deleteContact}>Delete</Button>
                </li>)}
        </ul>
    </>)
}
 