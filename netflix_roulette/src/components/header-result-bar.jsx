import React from 'react';

export default class HeaderResultBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let content;
        if(this.props.detailedpage){
            content = (
                <h1></h1>
            )
        } else {
            content = (
                <h1></h1>
            )
        }
        return(
            <div>
                {content}
            </div>
        );
    }
}