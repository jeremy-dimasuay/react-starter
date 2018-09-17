import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
class Button extends React.PureComponent {
    static propTypes = {
        onClick: PropTypes.func
    }

    static defaultProps = {
        onClick: () => {}
    }

    render() {
        return (
            <button
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        );
    }
};

export default Button;
