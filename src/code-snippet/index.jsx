import React, { PropTypes } from 'react';
import Prism from 'prismjs';
import beautify from 'js-beautify';

const langs = {
	html: 'html',
	jsx: 'jsx',
	css: 'css'
};

export const CodeSnippet = ({children, lang}) => {
	return (
		<pre>
			<code className="language-jsx" 
			dangerouslySetInnerHTML={createMarkup(children)} />
		</pre>
		)
};

CodeSnippet.propTypes = {
	lang: PropTypes.oneOf([langs.html, langs.jsx, langs.css]),
	children: PropTypes.string
};

const htmlMarkup = (jsx) => {
	return beautify.html(jsx,{ indent_size: 2});
}

function createMarkup(html, type) {
	const jsMarkup = beautify.js(html, { indent_size: 2, e4x: true });

	return {__html: Prism.highlight(jsMarkup, Prism.languages.markup) }; 
};
