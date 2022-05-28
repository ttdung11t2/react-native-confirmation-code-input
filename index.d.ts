import * as React from "react";
import * as ReactNative from "react-native";

declare module "react-native-confirmation-code-input" {

    type InputPositions = 'left' | 'right' | 'center' | 'full-width';
    type ClassNames = 'border-box' | 'border-circle' | 'border-b' | 'border-b-t' | 'border-l-r';

    interface CodeInputProps extends ReactNative.TextInputProps {
        codeLength?: number;
        compareWithCode?: string;
        inputPosition?: InputPositions;
        size?: number;
        space?: number;
        className?: ClassNames;
        cellBorderWidth?: number;
        activeColor?: string;
        inactiveColor?: string;
        ignoreCase?: boolean;
        codeInputStyle?: any,
        containerStyle?: any;
        onFulfill: Function;
        onCodeChange: Function;
    }

    export default class CodeInput extends React.Component<CodeInputProps, any> { }
}
