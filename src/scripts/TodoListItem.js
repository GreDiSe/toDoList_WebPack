import React from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';

class TodoListItem extends React.Component {
    constructor(){
        super();
        this.DONE = 'done';
    }

    render() {
        const cur = this.props.task;
        const className = cur.status === this.DONE ? 'cross' : 'notCross';
        return (
            <ListItem
                dense
                button
                onClick={this.props.checkedItem}
            >
                <Checkbox
                    checked={cur.status === this.DONE}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText className={className} primary={cur.name} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Comments">
                        <CommentIcon onClick={this.props.deleteTask} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

        )
    }
}
export default TodoListItem;
