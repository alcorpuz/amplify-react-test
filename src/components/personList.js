import React from 'react';
import axios from 'axios';


export default class PersonList extends React.Component {
  state = {
    persons: []
  }



  componentDidMount() {

    axios.defaults.withCredentials = true;
    var data = "test";
    axios(`https://vvbpfl3ird.execute-api.us-east-1.amazonaws.com/dev`, { data,
      withCredentials: true, 
      headers: {'Content-Type': 'application/json','AuthToken': 'test1'},
      method: "get",
    }).then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

    // fetch('https://vvbpfl3ird.execute-api.us-east-1.amazonaws.com/dev', { 
    //   credentials: 'include', 
    //   method: 'GET',
    // }).then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })


  }

  render() {
    return (
      <ul>
        {
          this.state.persons
        }
      </ul>
    )
  }
}