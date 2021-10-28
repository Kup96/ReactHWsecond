import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './user.module.css';


function UserList(props) {
    const{ user:{ avatar, name, surname, choosen }, remove, choose } = props;


    const userStyle = classNames(styles.standart, {[styles.choosenUser]: choosen,});
    return (
        <div onClick={choose}>
            <div className = {userStyle}>
            <img src={avatar} alt={name}></img>
            <p >{name} {surname}</p>
            </div>
            <button onClick={remove}>Delete</button>
        </div>
    );
}
export default UserList;