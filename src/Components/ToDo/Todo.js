import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Todo = () =>{

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const dataArray = [
        {"id":10384,"title":"something0.49935806260648885","description":"something0.6429448789658723","group":"microfocus","when":"2021-02-11T10:38:14.884000Z"},{"id":10385,"title":"sdfds","description":"dsf","group":"microfocus","when":"2021-02-11T10:39:13.926000Z"},{"id":10386,"title":"My test","description":"cool","group":"microfocus","when":"2021-02-11T10:39:31.941000Z"},{"id":10388,"title":"something0.6236190949490081","description":"something0.633657339229657","group":"microfocus","when":"2021-02-11T10:40:54.105000Z"},{"id":10389,"title":"something0.9421429394906737","description":"something0.06845429656283852","group":"microfocus","when":"2021-02-11T10:41:07.265000Z"},{"id":10390,"title":"something0.892285885356594","description":"something0.3568820317191439","group":"microfocus","when":"2021-02-14T09:29:43.716000Z"},{"id":10394,"title":"michael","description":"asdasd","group":"asdas","when":"2021-10-12T05:46:00Z"},{"id":10395,"title":"matan","description":"asdasd","group":"asdas","when":"2021-10-12T05:46:00Z"},{"id":10396,"title":"matan","description":"asd","group":"asd","when":"2021-10-22T01:47:00Z"},{"id":10397,"title":"my_title","description":"my_description","group":"my_group","when":"2021-10-21T00:00:00Z"},{"id":10398,"title":"my_title_2","description":"my_description_2","group":"my_group_2","when":"2021-10-21T01:00:00Z"},{"id":10399,"title":"my_title_3","description":"my_description_3","group":"my_group_3","when":"2021-10-21T03:00:00Z"},{"id":10400,"title":"my_title_3","description":"my_description_3","group":"my_group_3","when":"2021-10-21T03:00:00Z"},{"id":10401,"title":"my_title_3","description":"my_description_3","group":"my_group_3","when":"2021-10-21T03:00:00Z"}
    ];
    return (
    <>
        <form>
        <List dense={dense}>
                { dataArray.map((item)=> {
                        const { title, description} = item;
                        return (
                          <ListItem>
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