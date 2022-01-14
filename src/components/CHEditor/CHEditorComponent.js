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


// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

export default function CHEditorComponent() {

    const [ editorState, updateEditorState ] = React.useState( EditorState.createEmpty() );

    const handleKeyCommand = ( command, editorState ) => {
        const newState = RichUtils.handleKeyCommand( editorState, command );
        if ( newState ) {
            updateEditorState( newState );
            return 'handled';
        }
        return 'not-handled';
    };

    const getBlockStyle = ( block ) => {
        if ( block.getType() === 'blockquote' ) {
            return 'RichEditor-blockquote';
        } else {
            return null;
        }
    };

    const toggleInlineStyle = ( inlineStyle ) => {
        updateEditorState(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    };

    const toggleBlockType = ( blockType ) => {
        updateEditorState(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            )
        );
    };

    const mapKeyToEditorCommand = ( e ) => {
        if ( e.keyCode === 9 /* TAB */ ) {
            const newEditorState = RichUtils.onTab(
                e,
                editorState,
                4, /* maxDepth */
            );
            if ( newEditorState !== editorState ) {
                updateEditorState( newEditorState );
            }
            return;
        }
        return getDefaultKeyBinding( e );
    };

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    let contentState = editorState.getCurrentContent();
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
                editorState={ editorState }
                onToggle={ toggleBlockType }
            />
            <InlineStyleControls
                editorState={ editorState }
                onToggle={ toggleInlineStyle }
            />
            <div className={ className } onClick={ focusEditor }>
                <Editor
                    blockStyleFn={ getBlockStyle }
                    customStyleMap={ styleMap }
                    editorState={ editorState }
                    handleKeyCommand={ handleKeyCommand }
                    keyBindingFn={ mapKeyToEditorCommand }
                    onChange={ updateEditorState }
                    placeholder="Article body..."
                    ref={ editor }
                    spellCheck={ true }
                />
            </div>
        </div>
    );
}



