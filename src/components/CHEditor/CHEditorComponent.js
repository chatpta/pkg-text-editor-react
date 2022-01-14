/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * Email: peter.craftsmn@gmail.com                                            *
 * All rights reserved Copyright (c) 2019.                                    *
 ******************************************************************************/

import React from 'react';
import { Editor, RichUtils, getDefaultKeyBinding, EditorState } from 'draft-js';
import 'babel-polyfill';
import 'draft-js/dist/Draft.css';
import './EditorStyle/CHEditor.css';
import BlockStyleControls from "./EditorComponents/BlockStyleControls";
import InlineStyleControls from "./EditorComponents/InlineStyleControls";

export default class CHEditorComponent extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { editorState: EditorState.createEmpty() };

        this.onChange = ( editorState ) => this.setState( { editorState } );

        this.handleKeyCommand = this._handleKeyCommand.bind( this );
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind( this );
        this.toggleBlockType = this._toggleBlockType.bind( this );
        this.toggleInlineStyle = this._toggleInlineStyle.bind( this );
    }

    _handleKeyCommand( command, editorState ) {
        const newState = RichUtils.handleKeyCommand( editorState, command );
        if ( newState ) {
            this.onChange( newState );
            return true;
        }
        return false;
    }

    _mapKeyToEditorCommand( e ) {
        if ( e.keyCode === 9 /* TAB */ ) {
            const newEditorState = RichUtils.onTab(
                e,
                this.state.editorState,
                4, /* maxDepth */
            );
            if ( newEditorState !== this.state.editorState ) {
                this.onChange( newEditorState );
            }
            return;
        }
        return getDefaultKeyBinding( e );
    }

    _toggleBlockType( blockType ) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle( inlineStyle ) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const { editorState } = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if ( !contentState.hasText() ) {
            if ( contentState.getBlockMap().first().getType() !== 'unstyled' ) {
                className += ' RichEditor-hidePlaceholder';
            }
        }

        return (
            <div className="RichEditor-root">
                <BlockStyleControls
                    editorState={ editorState }
                    onToggle={ this.toggleBlockType }
                />
                <InlineStyleControls
                    editorState={ editorState }
                    onToggle={ this.toggleInlineStyle }
                />
                <div className={ className } onClick={ this.focus }>
                    <Editor
                        blockStyleFn={ getBlockStyle }
                        customStyleMap={ styleMap }
                        editorState={ editorState }
                        handleKeyCommand={ this.handleKeyCommand }
                        keyBindingFn={ this.mapKeyToEditorCommand }
                        onChange={ this.onChange }
                        placeholder="Tell a story..."
                        spellCheck={ true }
                    />
                </div>
            </div>
        );
    }
}

// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

function getBlockStyle( block ) {
    switch ( block.getType() ) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return null;
    }
}
