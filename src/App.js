import React, { Component } from 'react';
import './App.css';

import DataService from './components/DataService';
import Header from './components/Header';
import CreateForm from './components/CreateTraineeForm';
import UpdateForm from './components/UpdateTraineeForm';

class App extends Component {

	constructor() {
		super();

		this.state = {
			records: [],
			traineeID: 0
		}

		this.updatingState();

	}

	setTraineeID(id){
		this.setState({
			traineeID: id
		})
	}

	updatingState(){
		let promise = DataService.retrieveAllTrainees();
		promise.then(response => {
			this.setState({
				records: response.data
			})
		})
	}

	render() {

		return (
			<div className="App">
				<Header />

				<div className="container">

					<h1>QA Consulting</h1>

					<CreateForm />
					<br />

					<h3>Trainees</h3>

					<table className="table">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Operations</th>
							</tr>
						</thead>
						<tbody>
						{
							this.state.records.map((record, i) => {
								return(
									<tr key={"A"+ i}>
										<td>{record.id}</td>
										<td>{record.name}</td>
										<td>
											<span onClick={() => {
												this.setTraineeID(record.id);
											}}><UpdateForm id={this.state.traineeID}/></span>

											<button className="btn btn-danger leftMargin" onClick={() => {
												DataService.deleteTrainee(record.id).then(() => {
													this.updatingState();
												});
											}}>DELETE</button>

										</td>
									</tr>
								)
							})
						}
						</tbody>

					</table>

				</div>

			</div>
		);
	}
}

export default App;
