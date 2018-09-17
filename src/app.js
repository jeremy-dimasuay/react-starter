import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/button';

class RootApp extends React.PureComponent {
    static propTypes = {
        buttonLabel: PropTypes.string.isRequired
    }

    render() {
        return (
            <Button
                onClick={() => {}}
            >
                {this.props.buttonLabel}
            </Button>
        );
    }
}

const mapStateToProps = state => ({
    buttonLabel: state.app.label
});

export default connect(mapStateToProps, {})(RootApp);
