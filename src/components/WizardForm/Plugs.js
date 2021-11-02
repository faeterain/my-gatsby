import React from 'react';

const Link = ({ href, children }) => (
    <a href={href} className={'alert-link'} target='_blank'>
        { children }
    </a>
);

const Plugs = () => (
    <>
        <div>
            <h5>Do you love it? Star it! 🤩</h5>
            <iframe
                src="https://ghbtns.com/github-btn.html?user=jcmcneal&repo=react-step-wizard&type=star&count=true&size=large"
                frameBorder="0" scrolling="0" width="160px" height="30px"
            />
        </div>
    </>
);

export default Plugs;