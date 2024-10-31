import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType( 'cgb/block-pageflow-embeds', {

	title: __( 'Pageflow-Embed' ),
	icon: 'format-video',
	category: 'common',
	attributes: {
		width: { type: 'string'},
		height: { type: 'string'},
		url: { type: 'string' },
	},
	keywords: [
		__( 'pageflow-embeds' ),
		__( 'pageflow' ),
		__( 'embed' ),
		__( 'iframe' ),
	],
	edit: ( props ) => {
		function updateWidth( event ) {
			props.setAttributes( { width: event.target.value } );
		}

		function updateHeight( event ) {
			props.setAttributes( { height: event.target.value } );
		}

		function updateUrl( event ) {
			props.setAttributes( { url: event.target.value } );
		}

		return (
			<div className='pageflow-block-editor-container' id={ 'pageflow-block-editor' }>
				<img src={js_data.pgf_image}/>

				<div className="pgf-align-center">
					<label className="pgf-block-label">Width</label>
					<input type="string" placeholder="px, rem, vw or %..." value={ props.attributes.width }
						   onChange={ updateWidth } />
					<label className="pgf-block-label">Height</label>
					<input type="string" placeholder="px, rem, vh or %..." value={ props.attributes.height }
						   onChange={ updateHeight } />
				</div>

				<div className={ 'pgf-align-center pgf-story-section' }>
					<label className={ 'pgf-block-label' }>Story URL</label>
					<input className={ 'pgf-text-input' } type="text" placeholder="Enter story Url here..."
						   value={ props.attributes.url }
						   onChange={ updateUrl } />
				</div>
			</div>
		);
	},
	save: () => {
		return null;
	},
} );
