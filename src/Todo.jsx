/* export default function Todo({task}){
    // props.task='ami ghumabo'; props are immutable/read only. Hence, value can't be assigned. 
    return(
        <li>Task: {task}</li>
    )
} */


/* conditional rendering option 1*/

/* export default function Todo({task,isDone}){
    if(isDone===true){
        return <li>Finished {task}</li>
    }else{
        return <li>Work on {task}</li>
    }
}
 */


/* Conditional rendering option 2 */

/* export default function Todo({task,isDone}){
    if(isDone){
        return <li>Finished {task}</li>
    }
    return <li>Work on {task}</li>
} */


/*Conditional rendering option 3: ternary */

/* export default function Todo({task, isDone}){
    return(
        <li>{isDone? 'Finished' : 'Work on'}: {task} </li>
    )
} */


/* Conditional rendering option 4:&& */

/* export default function Todo({task,isDone}){
    return(
        <li>{task} {isDone && ': Done'}</li>
    )
} */

/* Conditional rendering option 5: || */

/* export default function Todo({task,isDone}){
    return(
        <li>{task} {isDone || ': Do it'}</li>
    )
} */


/* Conditional rendering option 6  */

export default function Todo({task,isDone}){
    let listItem;
    if(isDone){
        listItem= <li>Finish: {task}</li>
    }else{
        listItem= <li>Do it: {task}</li>
    }

    return listItem;
}