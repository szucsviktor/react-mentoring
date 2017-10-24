import React from "react";

// import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


//     render() {
//         let input;
//         return (
//             <div style={this.style.formContainer}>
//                 <form
//                     onSubmit={ e => {
//                         e.preventDefault();
//                         this.props.onMovieSearch(input.value);
//                     }}
//                 >
//                     <div>
//                         <label htmlFor="search-movie">
//                             Find your movie
//                         </label>
//                     </div>
//                     <div>
//                         <input type="text"
//                                id="search-movie"
//                                placeholder="Find your movie"
//                                ref = {node => {
//                                    input = node;
//                                }}
//                                // onChange={this.handleSeachFieldChange}
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
//                                    // checked={this.state.searchBy === "title"}
//                                    // onChange={this.handleSearchByChange}
//                             />
//                             <label htmlFor="search-by-director">Director</label>
//                             <input type="radio"
//                                    id="search-by-director"
//                                    name="search-mode"
//                                    value="director"
//                                    // checked={this.state.searchBy === "director"}
//                                    // onChange={this.handleSearchByChange}
//                             />
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This H1 element is NOT rendered. :(</h1>
            </div>
        );
    }
};