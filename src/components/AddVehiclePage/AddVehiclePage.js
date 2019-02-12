import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';



class AddvehiclePage extends Component {

    addNewVehicle = (event) =>{
        
        const action ={ type: 'ADD_NEW_VEHICLE', payload: this.state};
        this.props.dispatch(action);
    }

     styles = theme => ({
        button: {
            margin: theme.spacing.unit,
        },
        input: {
            display: 'none',
        },
    });

    state = {
        make: '',
        year: '',
        model: '',
        license: '',
        vin: '',
        owner: ''

    };

    handleChange = make => event => {
        console.log('make', this.state);
        
        this.setState({ 
            [make]: event.target.value
         });
    };

    handleChange = year => event => {
        console.log('year', this.state);

        this.setState({
            [year]: event.target.value
        });
    };

    handleChange = model => event => {
        console.log('model', this.state);

        this.setState({
            [model]: event.target.value
        });
    };

    handleChange = license => event => {
        console.log('license', this.state);

        this.setState({
            [license]: event.target.value
        });
    };

    handleChange = vin => event => {
        console.log('vin', this.state);

        this.setState({
            [vin]: event.target.value
        });
    };
    handleChange = owner => event => {
        console.log('owner', this.state);

        this.setState({
            [owner]: event.target.value
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <form className="text" noValidate autoComplete="off">
            <TextField
                id="make"
                label="Make"
                value={this.state.value}
                onChange={this.handleChange('make')}
                margin="normal"
            />
                <TextField
                    id="year"
                    label="Year"
                    value={this.state.value}
                    onChange={this.handleChange('year')}
                    margin="normal"
                />
                <TextField
                    id="model"
                    label="Model"
                    value={this.state.value}
                    onChange={this.handleChange('model')}
                    margin="normal"
                />
                <TextField
                    id="license"
                    label="License Plate"
                    value={this.state.value}
                    onChange={this.handleChange('license')}
                    margin="normal"
                />
                <TextField
                    id="vin"
                    label="VIN"
                    value={this.state.value}
                    onChange={this.handleChange('vin')}
                    margin="normal"
                />
                <TextField
                    id="owner"
                    label="Owner"
                    value={this.state.value}
                    onChange={this.handleChange('owner')}
                    margin="normal"
                />

                <Button onClick={this.addNewVehicle} variant="outlined" color="primary" className="button">
                    Submit
                    </Button>
                 </ form >

         
        );
    }
}

// TextFields.propTypes = {
//     classes: PropTypes.object.isRequired,
// };


const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(AddVehiclePage);