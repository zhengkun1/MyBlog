import React from 'react';
import styles from './essay.less';


class Essay extends React.Component {
  render() {
    const { title, content } = this.props;
    return (
      <div className={styles.global}>
        <h4>{title}</h4>
        <p className={styles.p}>{content}</p>
      </div>
    );
  }
}
export default Essay;
