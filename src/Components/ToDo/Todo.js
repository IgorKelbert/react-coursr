import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState , useEffect} from 'react'
import useServerFetch from '../../Hooks/useServerFetch';
import { store } from '../../redux/Store'
import { toDoReducer } from '../../redux/todo.reducer';


const Todo = () =>{

    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    const [ data, changeToDoData] = useState([]);
    const getData = useServerFetch();
    useEffect(() =>
    {
        (async () =>{
        const myData = await getData('application/json', "https://nztodo.herokuapp.com/api/tasks/?format=json", null, 'GET');
        store.dispatch(toDoReducer.actions.setData(myData));
        changeToDoData(myData );
        })();
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