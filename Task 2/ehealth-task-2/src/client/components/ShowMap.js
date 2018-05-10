import React from "react";
import "../../App.css"

const showMap = (props) => {
    let countries = props.data;    
    return (   
        <div>
         <table className="container">
          
        {    
            countries.map(ctry => {
                let time = null;
                switch(ctry.timezones[0]){
                    case "UTC":
                    time = <td className="blue">{ctry.timezones[0]}</td>;
                    break;
                    case "TIMEZONE":
                    time = <td>{ctry.timezones[0]}</td>;
                    break;
                    case "UTC-1:00":
                    time = <td className="cyan">{ctry.timezones[0]}</td>;
                    break;
                    case "UTC+00:00":
                    time = <td className="green">{ctry.timezones[0]}</td>;
                    break;
                    case "UTC+01:00":
                    time = <td className="yellow">{ctry.timezones[0]}</td>;
                    break;
                    case "UTC+02:00":
                    time = <td className="red">{ctry.timezones[0]}</td>;
                    break;
                    case "UTC+03:00":
                    time = <td className="white">{ctry.timezones[0]}</td>;
                    break;
                    case "UTC+04:00":
                    time = <td className="cyan">{ctry.timezones[0]}</td>;
                    break;
                    case "UTC+05:00":
                    time = <td className="tomato">{ctry.timezones[0]}</td>;
                    break;
                    case "UTC+06:00":
                    time = <td className="purple">{ctry.timezones[0]}</td>;
                    break;
                    default: time = null; break;
                }
                return (
                   
                    <tr>
                    <td>{ctry.name}</td>
                    <td>{ctry.capital}</td>
                    <td>{ctry.population}</td>
                    <td>{time}</td>
                    </tr>
                    
                )                 
             }
            )
          }
          </table>
        </div>
     
    )
}

export default showMap;