import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState , useEffect} from 'react'


const Todo = () =>{

    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    const [ data, changeToDoData] = useState([]);

    useEffect(() =>
    {
        fetch("https://nztodo.herokuapp.com/api/tasks/?format=json")
        .then((response) => {
              return response.json();
            })
        .then((result ) => 
            {   
                changeToDoData(result )
            }
            );
    },[])

    return (
    <>
        <form>
        <List dense={dense}>
                { data.map((item)=> {
                        const { title, description} = item;
                        return (
                          <ListItem key={item.id}>
                            <ListItemText
                              primary={title}
                              secondary={description}
                            />
                          </ListItem>
                        )
                    })
                }
           </List>
        </form>
    </>);

}

export default Todo