import React from 'react';

const EditTasks = () => {
    return(
        <tr>
            <td>
            </td>
            <td>
                <input type='text' required name='title'/>
            </td>
            <td>
                <input type='date' required name='duedate'/>
            </td>
            <td>
                <input type='date' required name='eventdate'/>
            </td>
            <td>
                <input type='text' required name='assignedto'/>
            </td>
            <td>
                <input type='text' required name='status'/>
            </td>
            <td>
                <input type='text' required name='priority'/>
            </td>
            <td>
                <input type='text' required name='category'/>
            </td>
            <td>
                <input type='text' required name='detailedinfo'/>
            </td>
            <td></td>
        </tr>
    )
}

export default EditTasks;