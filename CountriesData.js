import React, {Component} from "react";
import axios from "axios";

const ShowMap = (props) => {
    return (
     <div>
      <table>
        <th>
            <tr>
                <td>NAME</td>
                <td>CAPITAL</td>
                <td>POPULATION</td>
                <td>TIMEZONE(S)</td>
                <td>FLAG</td>
            </tr>
        </th>
        {
            props.data.map(ctry => {
                return (
                    Object.keys(ctry)
                    .map(fieldKey => {
                            return (
                                <tr>
                                <td>{ctry[fieldKey].name}</td>
                                <td>{ctry[fieldKey].capital}</td>
                                <td>{ctry[fieldKey].population}</td>
                                <td>{ctry[fieldKey].timezones[0]}</td>
                                <td><img src={ctry[fieldKey].flag} alt="Flag"/></td>
                                </tr>
                                
                            )}           
                ))
             }
            )
          }
      </table>
     </div>
    )
}

class CountriesData extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount () {
        axios.get('https://restcountries.eu/rest/v2/region/africa')
            .then(res => {
                const fetchedData = [];
                for (let key in res.data) {
                    fetchedData.push({
                        ...res.data[key]
                    })
                }
                
                this.setState({data: res.data});
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render () {
        return (
            <div>
              <ShowMap data={this.state.data} />
            </div>
        )
    }
}
 export default CountriesData;