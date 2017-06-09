import React, {Component} from "react";
import CodeIcon from "../../data/icons/code";

export default class PostHeader extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div className='postHeaderBody' ref={el => this.headerRef = el}>
                <CodeIcon className=""/>
                <div className='postHeaderText'>
                    <span>Nick Palmucci</span>
                </div>
            </div>
        )
    }
}
