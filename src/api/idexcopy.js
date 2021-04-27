import React,{ useState, useEffect} from "React";
import {getStudentDetails} from "./api.util";
import _map from 'lodash/map';
import styles from './api.module.scss'

function Api() {
    const [studentDetails,updateStudentDetails ] = useState([])
    useEffect(() => {
        getStudentDetails('https://apitestingpractice.herokuapp.com/getStudents').then((data=[]) =>{
            updateStudentDetails(data);
        }).catch(error=>{
            throw new Error("bad api request", error);
        })
        return () => {
            //cleanup
        }
    }, [])
    return (
        <>
            <table>
                <tbody>
                    
                    {
                        _map(studentDetails,({id,name,role,iterationId})=>{
                            return (
                                <tr className={styles.table_row}>
                                    <td>
                                        {id}
                                    </td>
                                    <td>
                                        {name}
                                    </td>
                                    <td>
                                        {role}
                                    </td>
                                    <td>
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