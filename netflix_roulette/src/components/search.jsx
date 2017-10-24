// import React from "react";
//
// import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
//
//
//
// export default class Search extends React.Component {
//     constructor(props) {
//         super(props);
//         this.style = {
//             formContainer: {
//                 height: "200px"
//             }
//         };
//
//         this.state = {
//             searchFieldValue: this.props.match.params.searchQuery || "",
//             searchBy: this.props.match.params.searchBy || "title",
//             fireRedirect: false
//         };
//
//         this.handleSeachFieldChange = this.handleSeachFieldChange.bind(this);
//         this.submitForm = this.submitForm.bind(this);
//         this.handleSearchByChange = this.handleSearchByChange.bind(this);
//     }
//
//     handleSeachFieldChange(e) {
//         e.preventDefault();
//         this.setState({searchFieldValue: e.target.value});
//     }
//
//     handleSearchByChange(e) {
//         this.setState({searchBy: e.target.value});
//     }
//
//     submitForm(e) {
//         e.preventDefault();
//         this.props.searchMovie(this.state.searchBy, this.state.searchFieldValue);
//         this.setState({fireRedirect: true});
//     }
//
//     render() {
//         const { fireRedirect } = this.state,
//               { from } = this.props.location.state || '/';
//
//         if(this.props.match.params.searchQuery && !this.state.fireRedirect){
//             this.props.searchMovie(this.state.searchBy,this.props.match.params.searchQuery);
//             this.setState({fireRedirect: true});
//         }
//
//         return (
//             <div style={this.style.formContainer}>
//                 <form onSubmit={this.submitForm}>
//                     <div>
//                         <label htmlFor="search-movie">
//                             Find your movie
//                         </label>
//                     </div>
//                     <div>
//                         <input type="text"
//                                id="search-movie"
//                                placeholder="Find your movie"
//                                value={this.state.searchFieldValue}
//                                onChange={this.handleSeachFieldChange}
//                         />
//                     </div>
//                     <div>
//                         <div>
//
//                             <input type="submit"
//                                    className=""
//                                    value="Search"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="search-by-title">Title</label>
//                             <input type="radio"
//                                    id="search-by-title"
//                                    name="search-mode"
//                                    value="title"
//                                    checked={this.state.searchBy === "title"}
//                                    onChange={this.handleSearchByChange}
//                             />
//                             <label htmlFor="search-by-director">Director</label>
//                             <input type="radio"
//                                    id="search-by-director"
//                                    name="search-mode"
//                                    value="director"
//                                    checked={this.state.searchBy === "director"}
//                                    onChange={this.handleSearchByChange}
//                             />
//                         </div>
//                     </div>
//                 </form>
//                 {fireRedirect && (
//                     <Redirect to={`/search/${this.state.searchBy}/${this.state.searchFieldValue}`} />
//                 )}
//             </div>
//         );
//     }
// }







import React from "react";

import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            formContainer: {
                height: "200px"
            }
        };
    }

    render() {
        let input;
        return (
            <div style={this.style.formContainer}>
                <form
                    onSubmit={ e => {
                        e.preventDefault();
                        this.props.onMovieSearch(input.value);
                    }}
                >
                    <div>
                        <label htmlFor="search-movie">
                            Find your movie
                        </label>
                    </div>
                    <div>
                        <input type="text"
                               id="search-movie"
                               placeholder="Find your movie"
                               ref = {node => {
                                   input = node;
                               }}
                               // onChange={this.handleSeachFieldChange}
                        />
                    </div>
                    <div>
                        <div>

                            <input type="submit"
                                   className=""
                                   value="Search"
                            />
                        </div>
                        <div>
                            <label htmlFor="search-by-title">Title</label>
                            <input type="radio"
                                   id="search-by-title"
                                   name="search-mode"
                                   value="title"
                                   // checked={this.state.searchBy === "title"}
                                   // onChange={this.handleSearchByChange}
                            />
                            <label htmlFor="search-by-director">Director</label>
                            <input type="radio"
                                   id="search-by-director"
                                   name="search-mode"
                                   value="director"
                                   // checked={this.state.searchBy === "director"}
                                   // onChange={this.handleSearchByChange}
                            />
                        </div>
                    </div>
                </form>
                {/*{fireRedirect && (*/}
                    {/*<Redirect to={`/search/${this.state.searchBy}/${this.state.searchFieldValue}`} />*/}
                {/*)}*/}
            </div>
        );
    }
}