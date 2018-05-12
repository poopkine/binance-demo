import { Elem, Tag } from 'bem-react-core';
import * as React from 'react';
import { Fragment } from 'react';

import './App-Foot.css';

export default class AppFoot extends Elem<{}, {/* state */}> {
  protected block = 'App';
  protected elem = 'Foot';

  protected tag(): Tag {
    return 'footer';
  }

  protected content() {
    return (
      <Fragment>
          © some copyright 2018
      </Fragment>
    );
  }
}
