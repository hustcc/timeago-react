// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { register } from "timeago.js";
import TimeAgo from "timeago-react";
import viLang from "timeago.js/lib/lang/vi";
import "./App.css";

register("vi", viLang);

function App() {
  return (
    <div>
      <h1>timeago-react</h1>
      <h3>
        A simple and efficient component to format date with `*** time ago`
        statement.
      </h3>

      <div className="examples">
        <div className="parent">
          <label>
            {" "}
            1. Use `datetime` parameter. This will update automatically.
          </label>
          You opened this page&nbsp;
          <strong>
            <TimeAgo datetime={new Date()} />
          </strong>
          .
          <pre>
            <code>{"<TimeAgo datetime={new Date()} />"}</code>
          </pre>
        </div>
      </div>

      <div className="examples">
        <div className="parent">
          <label>
            {" "}
            2. Use `locale` parameter. Default is `en`. Supported locales see{" "}
            <a href="https://github.com/hustcc/timeago.js/tree/master/src/lang">
              here
            </a>
          </label>
          Hustcc was born&nbsp;
          <strong>
            <TimeAgo datetime={"1992-08-01"} locale={"vi"} />
          </strong>
          .
          <pre>
            <code>{"<TimeAgo datetime={'1992-08-01'} locale={'vi'} />"}</code>
          </pre>
        </div>
      </div>

      <div className="examples">
        <div className="parent">
          <label> 3. Use `live` parameter. Default is `true`.</label>
          You opened this page&nbsp;
          <strong>
            <TimeAgo datetime={new Date().getTime() - 1000 * 11} live={false} />
          </strong>
          .
          <pre>
            <code>
              {
                "<TimeAgo datetime={new Date().getTime() + 1000 * 11} live={false} />"
              }
            </code>
          </pre>
        </div>
      </div>

      <div className="examples">
        <div className="parent">
          <label>
            {" "}
            4. Use `style` parameter. Styles will be applied to the root
            element.
          </label>
          Earth Day 2017 was&nbsp;
          <strong>
            <TimeAgo
              datetime={"2017-04-22"}
              style={{ textDecoration: "underline dotted", color: "green" }}
            />
          </strong>
          .
          <pre>
            <code>
              {
                "<TimeAgo datetime={'2017-04-22'} \n\tstyle={{textDecoration: 'underline dotted', color: 'green'}} />"
              }
            </code>
          </pre>
        </div>
      </div>

      <div className="examples">
        <div className="parent">
          <label>
            {" "}
            5. Use `relativeDate` parameter. The result will be calculated
            relative to the specific date.
          </label>
          2019-11-10 is&nbsp;
          <strong>
            <TimeAgo
              datetime={"2019-11-10"}
              opts={{ relativeDate: "2019-11-11" }}
            />
          </strong>
          &nbsp;relative to 2019-11-11.
          <pre>
            <code>
              {
                "<TimeAgo datetime={'2019-11-10'} opts={{ relativeDate: '2019-11-11' }} />"
              }
            </code>
          </pre>
        </div>
      </div>

      <div className="examples">
        <div className="parent">
          <label>
            6. The result is rendered as a `&lt;time&gt;` element. All
            attributes you can pass to `&lt;time&gt;` you can also pass to
            `&lt;TimeAgo&gt;`:
          </label>
          <strong>
            <TimeAgo
              datetime={"2019-11-15"}
              id="timeago"
              title="Nov 15, 2019"
            />
          </strong>
          <pre>
            <code>
              {
                "<TimeAgo datetime={'2019-11-15'} id='timeago' title='Nov 15, 2019' />"
              }
            </code>
          </pre>
        </div>
      </div>

      <h3>
        Download from GitHub!{" "}
        <a href="https://github.com/hustcc/timeago-react">timeago-react</a>
      </h3>
    </div>
  );
}

export default App;
