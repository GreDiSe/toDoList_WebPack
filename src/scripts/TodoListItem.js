import React from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui-icons/Close';
import { NAME_DONE } from "./store/initialState";

class TodoListItem extends React.Component {

    render() {
        const cur = this.props.task;
        const className = cur.status === NAME_DONE ? 'cross' : 'notCross';
        return (
            <ListItem
                style={
                    {
                    padding: 0,
                    width: '396px'
                    }
                }
                dense
                button
                onClick={this.props.checkedItem}
            >
                <Checkbox
                    checked={cur.status === NAME_DONE}
                    disableRipple
                />
                <ListItemText className={className} primary={cur.name} />

                <ListItemSecondaryAction>
                    <IconButton aria-label="Comments">

                        <Close onClick={this.props.deleteTask} className="material-icons"/>

                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>
        )
    }
}
export default TodoListItem;
