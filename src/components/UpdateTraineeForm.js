import React, { Component } from 'react';
import DataService from './DataService';

class UpdateForm extends Component {

    constructor(){
        super();
		this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        // event.preventDefault();

		// console.log(event.target);
		// console.log(this.props.id);
		const data = {}

		for (let element of event.target) {
			if (element.id) {
				data[element.id] = element.value;
			}
		}

		console.log(data);

		// DataService.updateTrainee(this.props.id, data);

    }

    render() {
        return (
            <>
			
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Update
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
								<p><strong>ID:</strong> {this.props.id}</p>

                                <form onSubmit={this.handleSubmit} id="form1">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
										<input type="text" className="form-control" id="name" placeholder="Enter Name" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input type="text" className="form-control" id="city" placeholder="Enter City" required/>
                                    </div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" form="form1">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default UpdateForm;