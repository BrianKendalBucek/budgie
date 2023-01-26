import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function ExpenseAdd(props) {

  // const [student, setStudent] = useState(props.student || "");
  // const [interviewer, setInterviewer] = useState(props.interviewer || null);
  // const [error, setError] = useState("");

  // function reset() {
  //   setStudent("")
  //   setInterviewer(null);
  // }

  // function cancel() {
  //   reset()
  //   props.onCancel();
  // }

  // function validate() {
  //   if (student === "") {
  //     setError("Student name cannot be blank");
  //     return;
  //   }

  //   if (interviewer === null) {
  //     setError("please select an interviewer");
  //     return;
  //   }
  //   setError("");
  //   props.onSave(student, interviewer);
  // }

  // return (
  //   <main className="appointment__card appointment__card--create">
  //     <section className="appointment__card-left">
  //       <form autoComplete="off" onSubmit={event => event.preventDefault()}>
  //         <input
  //           className="appointment__create-input text--semi-bold"
  //           name="name"
  //           type="text"
  //           placeholder="Enter Student Name"
  //           value={student}
  //           onChange={event => {
  //             setStudent(event.target.value);
  //           }}
  //           data-testid="student-name-input"
  //         />
  //         <section className="appointment__validation">{error}</section>
  //       </form>
  //       <InterviewerList
  //         value={interviewer}
  //         onChange={setInterviewer}
  //         interviewers={props.interviewers}
  //       />
  //     </section>
  //     <section className="appointment__card-right">
  //       <section className="appointment__actions">
  //         <Button danger onClick={cancel} >Cancel</Button>
  //         <Button confirm onClick={validate} >Save</Button>
  //       </section>
  //     </section>
  //   </main>
  // );
}