import React, {Component} from "react";
import {Code, FaceBook, Gmail, LinkedIn} from "../../data/icons/index";
import {Link} from 'react-router-dom';

export default class PostHeader extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        if (!this.props.show) {return null}
        return(
            <div className='postHeaderBody'>
                <Link to="/">
                    <div className='postHeaderText'>
                        <Code className=""/>
                        <span>Nick Palmucci</span>
                    </div>
                </Link>
                <div className='postHeaderLinks'>
                    <Link to="">
                        <FaceBook color={'white'}/>
                    </Link>
                    <Link to="">
                        <Gmail color={'white'}/>
                    </Link>
                    <Link to="">
                        <LinkedIn color={'white'}/>
                    </Link>
                </div>
            </div>
        )
    }
}
