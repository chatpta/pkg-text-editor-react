import { convertFromRaw, convertToRaw, EditorState } from "draft-js";


export function getRawContentFromEditorState( editorState ) {
    return convertToRaw( editorState.getCurrentContent() );
}

export function getEditorStateFromRawContent( editorRawContent ) {
    return EditorState.createWithContent( convertFromRaw( editorRawContent ) );
}
