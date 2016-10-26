import React, {PropTypes} from 'react';
import styles from './Comment.scss';

import {presets} from 'react-motion';
import Collapse from 'react-collapse';
import CommentBody from './../CommentBody';

import {collapserItemController} from '../../../src';

const Comment = (props) => {
  const {text, isOpened, onHeightReady} = props;
  return (
    <div className={styles.comment}>
      <Collapse
        keepCollapsedContent
        isOpened={isOpened}
        springConfig={presets.noWobble}
        onHeightReady={onHeightReady}
      >
        <CommentBody text={text} />
      </Collapse>
    </div>
  );
};

Comment.propTypes = {
  expandCollapse: PropTypes.func, // provided by collapserItemController
  isOpened: PropTypes.bool.isRequired, // provided by collapserItemController
  itemId: PropTypes.number, // provided by collapserItemController
  onHeightReady: PropTypes.func.isRequired, // provided by collapserItemController
  text: PropTypes.string,
};

export default collapserItemController(Comment);
