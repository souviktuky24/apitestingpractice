import React, { useState, useEffect } from 'react';
import {getStudentDetails} from './api.util';
import _map from 'lodash/map';
import styles from './api.module.scss'

function Api(){
    const [studentDetails, updateStudentDetails] = useState([]);
    useEffect(() => {
        //fetch('https://apitestingpractice.herokuapp.com/getStudents')
        getStudentDetails('https://apitestingpractice.herokuapp.com/getStudents').then((data = []) => {
            updateStudentDetails(data);
        }).catch((error) => {
            throw new Error("api failde", error)
        })
        return () => {
            // cleanup
        }
    }, [])
    return (
        <>
            <table className={styles.table_default}>
                <tbody>
                {
                    _map(studentDetails, ({name, id, role, iterationId}) => {
                        return (
                            <tr className={styles.table_row}>
                                <td className={styles.table_row}>
                                    {id}
                                </td>
                                <td className={styles.table_row}>
                                    {name}
                                </td>
                                <td className={styles.table_row}>
                                    {role}
                                </td>
                                <td className={styles.table_row}>
                                    {iterationId}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}


export default Api;