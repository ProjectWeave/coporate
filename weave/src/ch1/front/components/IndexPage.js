import React from 'react';

import { Link } from 'next/link';
import Head from 'next/head';
import Menu from './Menu';
import Plus from './Plus';
import Dog from './Dog';
import Travel from './Travel';
import Food from './Food';
import '../routes/Contents.css';

const IndexPage = () => {
    return (
        <div>
            <Plus></Plus>
            
            {/* <div className="groupitem">
                <Link  href="/contents" activeClassName="active">
                    <a><Dog /></a>
                </Link>            
                <Link href="/food" activeClassName="active">
                    <a><Travel /></a>
                </Link>            
                <Link href="/food" activeClassName="active">
                    <a><Food /></a>
                </Link>        
            </div> */}
        </div>
    );
};

export default IndexPage;