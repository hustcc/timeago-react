import React from 'react';
import timeago from 'timeago.js';
import TimeAgo from '../';
import AdSense from 'react-adsense';

timeago.register('vi', require('timeago.js/locales/vi'));


export default class TimeagoComponent extends React.Component {
  render() {
    return (
      <div>
        <h1> timeago-react </h1>
        <h3> A simple and efficient component to format date with `*** time ago` statement.</h3>

        <AdSense.Google client='ca-pub-7292810486004926'
                        slot='7806394673' />

        <div className='examples'>
            <div className='parent'>
                <label> 1. Use `datatime` parameter. This will update automatically. Wait for it.</label>
                You open this page&nbsp;
                <strong>
                  <TimeAgo datetime={new Date()} />
                </strong>.
                <pre>
                    <code>{"<TimeAgo datetime={new Date()} /> \n"}</code>
                </pre>
            </div>
        </div>

        <div className='examples'>
            <div className='parent'>
                <label> 2. Use `locale` parameter. Default is `en`. Supported locales see <a href="https://github.com/hustcc/timeago.js/tree/master/locales">here</a></label>
                Hustcc born in&nbsp;
                <strong>
                  <TimeAgo datetime={'1992-08-01'}
                           locale={'vi'} />
                </strong>.
                <pre>
                    <code>{"<TimeAgo datetime={'1992-08-01'} \n\tlocale={'vi'} /> \n"}</code>
                </pre>
            </div>
        </div>

        <div className='examples'>
            <div className='parent'>
                <label> 3. Use `live` parameter. Default is `true`.</label>
                You open this page&nbsp;
                <strong>
                  <TimeAgo datetime={new Date().getTime() - 1000 * 11}
                           live={false} />
                </strong>.
                <pre>
                    <code>{"<TimeAgo datetime={new Date().getTime() + 1000 * 11} \n\tlive={false} /> \n"}</code>
                </pre>
            </div>
        </div>

        <div className='examples'>
            <div className='parent'>
                <label> 4. Use `style` parameter. Styles will be applied to the root element.</label>
                Earth Day 2017 was&nbsp;
                <strong>
                  <TimeAgo datetime={'2017-04-22'}
                     style={{textDecoration: 'underline', color: 'blue'}}/>
                </strong>.
                <pre>
                    <code>{"<TimeAgo datetime={'2017-04-22'} \n\tstyle={{textDecoration: 'underline', color: 'blue'}} /> \n"}</code>
                </pre>
            </div>
        </div>
        <h3>Download / Document on GitHub! <a href='https://github.com/hustcc/timeago-react'>timeago-react</a></h3>
      </div>
    );
  }
};
