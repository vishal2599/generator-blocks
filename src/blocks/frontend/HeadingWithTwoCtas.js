import React from 'react';
import './HeadingWithTwoCtas.scss';
function HeadingWithTwoCtas(props) {
    const { blockTheme, title, description, blueCtaText, blueCtaUrl, transparentCtaText, transparentCtaUrl } = props

    const blockClass = blockTheme == 'Dark' ? 'block-theme-dark' : 'block-theme-light'

    return (
        <div className={blockClass + ' block-container block-theme-box text-center'}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="cta-links d-flex flex-column flex-md-row justify-content-center">
                <a href={blueCtaUrl} className="bg-btn align-items-center mb-3 mb-md-0 d-flex justify-content-center">{blueCtaText}</a>
                <a href={transparentCtaUrl} className="align-items-center d-flex justify-content-center">{transparentCtaText}</a>
            </div>
        </div>
    )
}

export default HeadingWithTwoCtas;