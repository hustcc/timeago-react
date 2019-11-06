import { Component } from "react";
interface Props {
    datetime: string | Date | number;
    live?: boolean;
    locale?: string;
    className?: string;
    style?: object;
}
export default class TimeAgo extends Component<Props> {
    static defaultProps: {
        live: boolean;
        locale: string;
    };
    private dom;
    constructor(props: Readonly<Props>);
    componentDidMount(): void;
    componentDidUpdate(): void;
    renderTimeAgo(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
