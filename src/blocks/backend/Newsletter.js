wp.blocks.registerBlockType("generator-gutenberg-blocks/newsletter-block", {
    title: "Newsletter",
    icon: "email-alt2",
    category: "common",
    attributes: {
        blockTheme: { type: "string" },
        audience: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        submitButtonText: { type: "string" }
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
    function updateMailchimpAudience(e) {
        props.setAttributes({ audience: e.target.value })
    }
    function updateTitle(e) {
        props.setAttributes({ title: e.target.value })
    }
    function updateDescription(e) {
        props.setAttributes({ description: e.target.value })
    }
    function updatesubmitButtonText(e) {
        props.setAttributes({ submitButtonText: e.target.value })
    }

    const darkSelected = props.attributes.blockTheme == 'Dark' ? 'selected' : '';
    const lightSelected = props.attributes.blockTheme == 'Light' ? 'selected' : '';

    const bnwSelected = props.attributes.audience == 'BNW:7242937' ? 'selected' : '';
    const bngSelected = props.attributes.audience == 'BNG:7242929' ? 'selected' : '';
    const bnmSelected = props.attributes.audience == 'BNM:7244221' ? 'selected' : '';

    return (
        <div className="generator-block-backend">
            <p>Select Block theme</p>
            <select onChange={updateBlockTheme}>
                <option value="Dark" selected={darkSelected}>Dark</option>
                <option value="Light" selected={lightSelected}>Light</option>
            </select>

            <p>Select Subscriber Audience</p>
            <select onChange={updateMailchimpAudience}>
                <option value="BNW:7242937" selected={bnwSelected}>BNW</option>
                <option value="BNG:7242929" selected={bngSelected}>BNG</option>
                <option value="BNM:7244221" selected={bnmSelected}>BNM</option>
            </select>
            <p>Title</p>
            <input type="text" value={props.attributes.title} onChange={updateTitle} placeholder="Enter Title" />

            <p>Description</p>
            <textarea type="text" value={props.attributes.description} onChange={updateDescription} placeholder="Enter Description"></textarea>

            <p>Submit Button text</p>
            <div className="cta blue-cta">
                <input type="text" value={props.attributes.submitButtonText} onChange={updatesubmitButtonText} placeholder="Enter CTA text" />
            </div>

        </div>
    )
}
