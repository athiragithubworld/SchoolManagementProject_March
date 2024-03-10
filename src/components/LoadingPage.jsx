import React from "react";
import classes from '../style/LoadingPage.module.css';

export default function LoadingPage() {
  return (
    <>
    <div className={classes.mainbody}>
      <div className={classes.book}>
          <div className={`${classes.book__pg} ${classes[' - shadow']}`}></div>
        <div className={classes.book__pg}></div>
        <div className={`${classes.book__pg} ${classes['book__pg--2']}`}></div>
        <div className={`${classes.book__pg} ${classes['book__pg--3']}`}></div>
        <div className={`${classes.book__pg} ${classes['book__pg--4']}`} ></div>
        <div className={`${classes.book__pg} ${classes['book__pg--5']}`}></div>
      </div>
    </div >
      </>
  );
}
