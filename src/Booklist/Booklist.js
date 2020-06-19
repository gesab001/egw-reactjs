import React from 'react';


class Booklist extends React.Component {
      componentDidMount()
{
    let patients = localStorage.getItem('patients');
     if(patients)
    {
            this.setState({
            patientData: patients
     })         
    console.log(JSON.stringify(patients));
    }
    else
    {
        this.getPatients();
     }
}

    getPatients(){
    return this.fetchPost().then(([response,json]) => {
       console.log(response);
       if(response.status === 200)
       {             
             this.setState({
             patientDetails: json.data.patient
          })
          localStorage.setItem('patients',json.data.patient)     
       }
    })
 }

     fetchPost(){
        const URL = 'http://domain:3000/api/';
        return fetch(URL, {method:'GET',headers:new Headers ({
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         .then(response => Promise.all([response, response.json()]));
     }
}
export default Booklist;
