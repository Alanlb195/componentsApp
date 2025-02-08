import prompt from 'react-native-prompt-android';

interface Options {
    title: string;
    message?: string;
    callbackOrButtons?: ((value: string) => void) | Array<PromptButton>
    promptType?: PromptType;
    placeholder: string;
    defaultValue?: string;
}

interface PromptButton {
    text?: string;
    onPress?: (message: string) => void;
    style?: 'default' | 'cancel' | 'destructive';
}

type PromptType = 'default' | 'plain-text' | 'secure-text';


export const showPrompt = ({
    title,
    message,
    callbackOrButtons,
    promptType = 'plain-text',
    placeholder,
    defaultValue,
}: Options) => {

    prompt(
        title,
        message,
        callbackOrButtons,
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder
        }
    );

}