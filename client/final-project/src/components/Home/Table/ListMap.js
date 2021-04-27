import React from 'react';
import {Table, Row, Button} from 'reactstrap';


const ListMap = (props) => {


  const displayList = () => {  
    return props.lists.map((list, index) => {
        return(
        <tr key={index}>
            <td>{list.item}</td>
            <td>{list.quantity}</td>
            <td>{list.category}</td>
        </tr>
        )
    })
}
return (
   <Table>
       <tbody>
           {displayList}
       </tbody>
   </Table>
  )
}

export default ListMap