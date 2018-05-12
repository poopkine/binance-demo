import { Elem, Tag } from 'bem-react-core';

import './App-Logo.css';

export default class AppLogo extends Elem<{}, {/* state */}> {
  protected block = 'App';
  protected elem = 'Logo';

  protected tag(): Tag {
    return 'span';
  }
}
