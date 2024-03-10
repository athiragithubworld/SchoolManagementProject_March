import React from 'react'
import classes from '../style/Faculty.module.css';


export default function FacultyCopy() {
  return (
    <>
      <div className={classes.facultyContainer}>
        <div className={classes.facultyheader}>Faculty</div>
        <div>
          <div className={`${classes.facultydetails} ${classes.maths}`}>
            <div>
              <img
                className={classes.facultyphoto}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                alt="profile"
              />
            </div>
            <div>
              <div className={classes.facultyname}>ABC</div>
              {/*   */}
              <div className={classes.facultysubject}>Maths Teacher</div>
            </div>
          </div>
          <div className={`${classes.facultydetails} ${classes.science}`}>
            <div>
              <img
                className={classes.facultyphoto}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                alt="profile"
              />
            </div>
            <div>
              <div className={classes.facultyname}>ABC</div>
               
              <div className={classes.facultysubject}>Maths Teacher</div>
            </div>
          </div>
          <div className={`${classes.facultydetails} ${classes.hindi}`}>
            <div>
              <img
                className={classes.facultyphoto}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                alt="profile"
              />
            </div>
            <div>
              <div className={classes.facultyname}>ABC</div>
               
              <div className={classes.facultysubject}>Maths Teacher</div>
            </div>
          </div>
          <div className={`${classes.facultydetails} ${classes.social}`}>
            <div>
              <img
                className={classes.facultyphoto}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                alt="profile"
              />
            </div>
            <div>
              <div className={classes.facultyname}>ABC</div>
               
              <div className={classes.facultysubject}>Maths Teacher</div>
            </div>
          </div>
          <div className={`${classes.facultydetails} ${classes.english}`}>
            <div>
              <img
                className={classes.facultyphoto}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                alt="profile"
              />
            </div>
            <div>
              <div className={classes.facultyname}>ABC</div>
               
              <div className={classes.facultysubject}>Maths Teacher</div>
            </div>
          </div>
          <div className={`${classes.facultydetails} ${classes.science}`}>
            <div>
              <img
                className={classes.facultyphoto}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                alt="profile"
              />
            </div>
            <div>
              <div className={classes.facultyname}>ABC</div>
               
              <div className={classes.facultysubject}>Maths Teacher</div>
            </div>
          </div>
          <div className={`${classes.facultydetails} ${classes.chemistry}`}>
            <div>
              <img
                className={classes.facultyphoto}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                alt="profile"
              />
            </div>
            <div>
              <div className={classes.facultyname}>ABC</div>
               
              <div className={classes.facultysubject}>Maths Teacher</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
