import React from "react";
import katex from "katex";

export class Latex extends React.Component {
    render() {
        var math = katex.renderToString(this.props.data);
        return (<p dangerouslySetInnerHTML={ {__html: math} }/>);
    }
}

export class LatexBlock extends React.Component {
    render() {
        var math = katex.renderToString(this.props.data, { displayMode: true });
        return (<p dangerouslySetInnerHTML={ {__html: math} }/>);
    }
}