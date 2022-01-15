/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * Email: peter.craftsmn@gmail.com                                            *
 * All rights reserved Copyright (c) 2019.                                    *
 ******************************************************************************/

import React from 'react';
import { Editor, RichUtils, getDefaultKeyBinding } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './EditorStyle/CHEditor.css';
import BlockStyleControls from "./EditorComponents/BlockStyleControls";
import InlineStyleControls from "./EditorComponents/InlineStyleControls";
import StoreConnectEditorEdit from "../../store/storeConnectEditorEdit";

// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

function EditorComponentCh( props ) {
    const { state, setState } = props;


    function getBlockStyle( block ) {
        switch ( block.getType() ) {
            case 'blockquote':
                return 'RichEditor-blockquote';
            default:
                return null;
        }
    }

    function handleKeyCommand( command, editorState ) {
        const newState = RichUtils.handleKeyCommand( editorState, command );
        if ( newState ) {
            setState( newState );
            return true;
        }
        return false;
    }

    function mapKeyToEditorCommand( e ) {
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

    function toggleBlockType( blockType ) {
        setState(
            RichUtils.toggleBlockType(
                state,
                blockType
            )
        );
    }

    function toggleInlineStyle( inlineStyle ) {
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
    const contentState = state.getCurrentContent();
    if ( !contentState.hasText() ) {
        if ( contentState.getBlockMap().first().getType() !== 'unstyled' ) {
            className += ' RichEditor-hidePlaceholder';
        }
    }

    // editor must be declared here so the ref can refer to it
    let editorRef = React.createRef();

    function focusEditor() {
        editorRef.current.focus();
    }

    return (
        <div className="RichEditor-root">
            <BlockStyleControls
                editorState={ state }
                onToggle={ toggleBlockType }
            />
            <InlineStyleControls
                editorState={ state }
                onToggle={ toggleInlineStyle }
            />
            <div className={ className } onClick={ focusEditor }>
                <Editor
                    blockStyleFn={ getBlockStyle }
                    customStyleMap={ styleMap }
                    editorState={ state }
                    handleKeyCommand={ handleKeyCommand }
                    keyBindingFn={ mapKeyToEditorCommand }
                    onChange={ setState }
                    placeholder="About product..."
                    ref={ editorRef }
                    spellCheck={ true }
                />
            </div>
        </div>
    );
}

export default StoreConnectEditorEdit( EditorComponentCh );
