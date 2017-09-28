import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class HeaderResultBar extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            resultBar: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                backgroundColor: "#ddd"
            },
            directorContainer: {
                marginLeft: "2rem"
            },
            sortContainer: {
                marginRight: "2rem"
            }
        };
    }

    render() {
        console.log(this.props);
        return (
            <div>
               <div style={this.style.resultBar}>
                   <div style={this.style.directorContainer}>
                       Film by
                   </div>
               </div>

                <div style={this.style.resultBar}>
                    <div style={this.style.directorContainer}>
                        {/*<div>{this.props.result.length} movies found</div>*/}
                    </div>
                    <div style={this.style.sortContainer}>
                        <span>Sort by </span>
                        <span>release date </span>
                        <span>rating</span>
                    </div>
                </div>
            </div>
        );
    }
}