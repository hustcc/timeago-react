import * as React from "react";

export interface Props {
  datetime: string | Date | number;
  live?: boolean;
  locale?: string;
  className?: string;
  style?: object;
}

declare module "timeago-react" {
  export default class TimeAgo extends React.Component<Props> {}
}
