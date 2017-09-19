import React from "react";

export default class HeaderResultBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let content;
        if (this.props.detailedpage) {
            content = (
                <div>Film by {this.props.attributes.director}</div>
            )
        } else {
            content = (
                <div>
                    <div>
                        <div>{this.props.attributes.length} movies found</div>
                    </div>
                    <div>
                        <span>Sort by </span>
                        <span>release date</span>
                        <span>rating</span>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}