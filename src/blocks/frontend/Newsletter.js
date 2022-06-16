import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import Script from "react-inline-script";
import './Newsletter.scss';

function Newsletter(props) {
    const { blockTheme, audience, title, description, submitButtonText } = props
    const blockClass = blockTheme == 'Dark' ? 'block-theme-dark' : 'block-theme-light'

    const [inputText, setInputText] = useState('');

    const audienceId = audience.split(':')[1];

    return (
        <div className={blockClass + ' block-container block-newsletter block-theme-box d-flex justify-content-between'}>
            <div className="copy text-start">
                <h2 className='m-0'>{title}</h2>
                <p className='m-0'>{description}</p>
            </div>
            <div id="mc_embed_signup" className="form">
                <form action="https://adventrum.us14.list-manage.com/subscribe/post?u=2d3f555e35b98b580991578ac&amp;id=557e898eca" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div className="input-group mc-field-group">
                        <input type="email" placeholder="Your Email" value={inputText} name="EMAIL" class="required email form-control" id="mce-EMAIL" onChange={(e) => setInputText(e.target.value)} />
                        <div hidden="true"><input type="hidden" name="tags" value={audienceId} /></div>
                        <div className="input-group-text clear p-0"><input type="submit" value={ submitButtonText } name="subscribe" id="mc-embedded-subscribe" className="submit-btn button" /></div>
                    </div>
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_2d3f555e35b98b580991578ac_557e898eca" tabindex="-1" value="" /></div>
                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                        <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                </form>
            </div>
            <Helmet>
            <script type='text/javascript' src='https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
            <Script>
        	{`
            (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
        	`}
            </Script>
            </Helmet>
        </div>
    )
}

export default Newsletter;