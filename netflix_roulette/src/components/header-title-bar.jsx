import React from 'react';

export default class HeaderTitleBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let content;
            if(this.props.detailedpage){
                content = (
                    <div>
                        <span>netflixroulette</span>
                        <a href="/">Search</a>
                    </div>
                )
            } else {
                content = (
                    <div>
                        <span>netflixroulette</span>
                    </div>
                )
            }
        return(
            <div>
                {content}
            </div>
        );
    }
}