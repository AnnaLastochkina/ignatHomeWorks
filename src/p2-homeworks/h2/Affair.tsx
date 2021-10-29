import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    const priorityClass = s.task2name + ' ' +s[props.affair.priority]
    return (
        <div className={s.task2wrapper}>
            <div className={s.task2name}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <button className={s.task2deletebtn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
