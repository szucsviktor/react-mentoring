import React from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

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
       let movie = this.props.getMovie(this.props.match.params.movieId),
           movieNumber = this.props.movieNumber || 0,
           content;
            if (movie) {
                content = (
                    <div>
                        <div style={this.style.resultBar}>
                            <div style={this.style.directorContainer}>
                                Films by {movie.director}
                            </div>
                        </div>
                    </div>
                )
            } else {
                content = (
                    <div>Movie director has not been found</div>
                )
            }

        return (
            <Switch>
                <Route path="/item/:movieId"
                       render={props =>
                       <div>
                           {content}
                       </div>

                   }
                />
                <Route path="/search/:searchBy/:searchQuery"
                       render={props =>
                           <div>
                               {/*<div style={this.style.resultBar}>*/}
                                   {/*<div style={this.style.directorContainer}>*/}
                                       {/*/!*<div>{this.props.result.length} movies found</div>*!/*/}
                                   {/*</div>*/}
                                   {/*<div style={this.style.sortContainer}>*/}
                                       {/*<span>Sort by </span>*/}
                                       {/*<span>release date </span>*/}
                                       {/*<span>rating</span>*/}
                                   {/*</div>*/}
                               {/*</div>*/}
                               <h1>search query, {movieNumber}</h1>
                           </div>
                       }
                />
            </Switch>
        );
    }
}