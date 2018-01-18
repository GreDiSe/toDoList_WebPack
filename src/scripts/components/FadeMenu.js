import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Fade from 'material-ui/transitions/Fade';

class FadeMenu extends React.Component {
    constructor(){
        super();
        this.state = {
            anchorEl: null,
            name: 'menu'
        };
    }


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;


        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'fade-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    {this.state.name}
                </Button>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    transition={Fade}
                >

                    {this.props.items.map((cur,i) => {
                        return (
                            <MenuItem
                                key={i}
                                onClick={() => {
                                    this.handleClose();
                                    this.setState(prevState => {
                                        return cur.name !== 'Загрузить' ?  {name: cur.name} : {...prevState};
                                    });
                                    cur.func();
                                }}
                            >
                                {cur.name}
                            </MenuItem>
                        )
                    })}
                </Menu>
            </div>
        );
    }
}

export default FadeMenu;