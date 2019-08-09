import React, { Component } from 'react';
import DataService from './DataService';

class CreateForm extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        // event.preventDefault();
        // console.log(event.target);

        const data = {}

        for (let element of event.target) {
            if (element.id) {
                data[element.id] = element.value;
            }
        }

        DataService.createTrainee(data);
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter City" required/>
                </div>
                <button type="submit" className="btn btn-success">Add Trainee</button>
            </form>
        )
    }
}

export default CreateForm;