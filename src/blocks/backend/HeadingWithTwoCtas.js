wp.blocks.registerBlockType("generator-gutenberg-blocks/generator-gutenberg-blocks", {
    title: "Generator Block 1",
    icon: "feedback",
    category: "common",
    attributes: {
        blockTheme: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        blueCtaText: { type: "string" },
        blueCtaUrl: { type: "string" },
        transparentCtaText: { type: "string" },
        transparentCtaUrl: { type: "string" }
    },
    edit: EditComponent,
    save: function (props) {
        return null
    }
});

function EditComponent(props) {

    function updateBlockTheme(e) {
        props.setAttributes({ blockTheme: e.target.value })
    }
    function updateTitle(e) {
        props.setAttributes({ title: e.target.value })
    }
    function updateDescription(e) {
        props.setAttributes({ description: e.target.value })
    }
    function updateBlueCtaText(e) {
        props.setAttributes({ blueCtaText: e.target.value })
    }
    function updateBlueCtaUrl(e) {
        props.setAttributes({ blueCtaUrl: e.target.value })
    }
    function updateTransparentCtaText(e) {
        props.setAttributes({ transparentCtaText: e.target.value })
    }
    function updateTransparentCtaUrl(e) {
        props.setAttributes({ transparentCtaUrl: e.target.value })
    }

    const darkSelected = props.attributes.blockTheme == 'Dark' ? 'selected' : '';
    const lightSelected = props.attributes.blockTheme == 'Light' ? 'selected' : '';

    return (
        <div className="generator-block-backend">
            <p>Select Block theme</p>
            <select onChange={updateBlockTheme}>
                <option value="Dark" selected={darkSelected}>Dark</option>
                <option value="Light" selected={lightSelected}>Light</option>
            </select>
            <p>Title</p>
            <input type="text" value={props.attributes.title} onChange={updateTitle} placeholder="Enter Title" />

            <p>Description</p>
            <textarea type="text" value={props.attributes.description} onChange={updateDescription} placeholder="Enter Description"></textarea>

            <p>Blue CTA</p>
            <div className="cta blue-cta">
                <input type="text" value={props.attributes.blueCtaText} onChange={updateBlueCtaText} placeholder="Enter CTA text" />
                <input type="text" value={props.attributes.blueCtaUrl} onChange={updateBlueCtaUrl} placeholder="Enter CTA URL" />
            </div>

            <p>Transparent CTA</p>
            <div className="cta transparent-cta">
                <input type="text" value={props.attributes.transparentCtaText} onChange={updateTransparentCtaText} placeholder="Enter CTA text" />
                <input type="text" value={props.attributes.transparentCtaUrl} onChange={updateTransparentCtaUrl} placeholder="Enter CTA URL" />
            </div>

        </div>
    )
}
