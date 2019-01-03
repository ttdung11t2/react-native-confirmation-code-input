// @flow
import { createRef } from 'react';

const createRefByCallBack = () => {
  const ref = instanceOrNode => {
    ref.current = instanceOrNode;
  };

  ref.current = null;

  Object.seal(ref);

  return ref;
};

export default createRef || createRefByCallBack;
