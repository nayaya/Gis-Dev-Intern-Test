import React, {Component} from "react";
import axios from "axios";
import ShowMap from "./ShowMap";

class CountriesData extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{name: "nigeria", capital: "Abuja", population: "18,000,000", timezones: ['gmt +1', 'gmt -1']},
            {name: "Ghana", capital: "Accra", population: "11,400,000", timezones: ['gmt +1', 'gmt -1']},
            {name: "Benin", capital: "Cotonou", population: "7,050,000", timezones: ['gmt +1', 'gmt -1']}
                ]
        };
    }

    componentDidMount () {
        axios.get('https://restcountries.eu/rest/v2/region/africa')
            .then(res => {
                const fetchedData = [{name: "NAME",capital: "CAPITAL", population: "POPULATION", timezones: ["TIMEZONE"]}];
                for (let key in res.data) {
                    fetchedData.push(
                        res.data[key]
                    )
                }
                
                this.setState({data: fetchedData});
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render () {
        let data = this.state.data;
        return (
            <div>
              <ShowMap data={data} />
            </div>
        )
    }
}
 export default CountriesData;