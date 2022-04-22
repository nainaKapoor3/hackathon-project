import React from 'react'
import "./CancerForm.css"

const DiabetesForm = () => {
  return (
    <div class="container">
	<div class="header">
		<h2 style={{textAlign:'center'}}>Enter below details for DIABETES prediction</h2>
	</div>
	<form id="form" class="form">
		<div class="form-control">
			<label for="username">Full Name:</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Pregnancies:</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Glucose :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">BloodPressure :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">SkinThickness :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Insulin :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">BMI :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">DiabetesPedigreeFunction :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Age :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>   

<button>SUBMIT</button>
</form>
</div>
)
}

export default DiabetesForm