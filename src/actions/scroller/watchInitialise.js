import { WATCH_INITIALISE } from './../const';

function action(scrollerId, getScrollTop) {
  return {
    type: WATCH_INITIALISE,
    payload: {
      scrollerId,
      getScrollTop,
    },
  };
}

module.exports = action;
