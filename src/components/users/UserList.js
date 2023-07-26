import React, { useState } from "react";
import Card from '../UI/Card';
import styles from './UserList.module.css';

export default function UserList(props) {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => (
                    <li>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
}