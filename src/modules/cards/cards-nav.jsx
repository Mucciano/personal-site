import React, { Component } from 'react';
import cx from 'classnames'
import './cards-nav.css';

export default class CardTypes extends Component {

    render() {
        const {code, blog, cardType} = this.props;
        const active = (cardType === 'code');
        const codeActive = cx({codeActive: active});
        const blogActive = cx({blogActive: !active});

        return(
            <div className='cardsNav'>
                <p className={codeActive} onClick={code}>code</p>
                <p className={blogActive} onClick={blog}>blog</p>
            </div>
        )
    }
}
