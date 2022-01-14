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

export default function CHEditorComponent() {

    const [ state, setState ] = React.useState( () => EditorState.createEmpty() );

    function _handleKeyCommand( command, editorState ) {
        const newState = RichUtils.handleKeyCommand( editorState, command );
        if ( newState ) {
            setState( newState );
            return true;
        }
        return false;
    }

    function _mapKeyToEditorCommand( e ) {
        if ( e.keyCode === 9 /* TAB */ ) {
            const newEditorState = RichUtils.onTab(
                e,
                state,
                4, /* maxDepth */
            );
            if ( newEditorState !== state ) {
                setState( newEditorState );
            }
            return;
        }
        return getDefaultKeyBinding( e );
    }

    function _toggleBlockType( blockType ) {
        setState(
            RichUtils.toggleBlockType(
                state,
                blockType
            )
        );
    }

    function _toggleInlineStyle( inlineStyle ) {
        setState(
            RichUtils.toggleInlineStyle(
                state,
                inlineStyle
            )
        );
    }

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = state.getCurrentContent();
    if ( !contentState.hasText() ) {
        if ( contentState.getBlockMap().first().getType() !== 'unstyled' ) {
            className += ' RichEditor-hidePlaceholder';
        }
    }

    // editor must be declared here so the ref can refer to it
    let editor = React.createRef();

    function focusEditor() {
        editor.current.focus();
    }

    return (
        <div className="RichEditor-root">
            <BlockStyleControls
                editorState={ state }
                onToggle={ _toggleBlockType }
            />
            <InlineStyleControls
                editorState={ state }
                onToggle={ _toggleInlineStyle }
            />
            <div className={ className } onClick={ focusEditor }>
                <Editor
                    blockStyleFn={ getBlockStyle }
                    customStyleMap={ styleMap }
                    editorState={ state }
                    handleKeyCommand={ _handleKeyCommand }
                    keyBindingFn={ _mapKeyToEditorCommand }
                    onChange={ setState }
                    placeholder="Tell a story..."
                    ref={ editor }
                    spellCheck={ true }
                />
            </div>
        </div>
    );
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
