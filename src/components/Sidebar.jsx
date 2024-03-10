import "../style/Sidebar.css";
import React from "react";
import CustomSelect from "../components/CustomSelect";
const Sidebar = () => {
  return (
    <div className="side-wrapper">
      <div className="sidebar">
        <CustomSelect
          image="https://icon-library.com/images/course-icon/course-icon-17.jpg"
          title="Courses"
        />
        <CustomSelect
          image="https://tse1.mm.bing.net/th?id=OIP.2JNpOJcnwaXp9cdmg9RbbAHaHa&pid=Api&P=0&h=220"
          title="Student"
        />
        <CustomSelect
          image="https://tse2.mm.bing.net/th?id=OIP.XMo3bVhmk7LxwuXyWLt9AwHaHa&pid=Api&P=0&h=220"
          title="Analytics"
        />
        <CustomSelect
          image="https://tse3.mm.bing.net/th?id=OIP.xZetRk6FUlf0WmM-0m4xGwHaFE&pid=Api&P=0&h=220"
          title="Class"
        />
        <CustomSelect
          image="https://tse4.mm.bing.net/th?id=OIP.xLnoqc3enK8DORScF3G_LgHaHa&pid=Api&P=0&h=220"
          title="Attendance"
        />
        <CustomSelect
          image="https://tse2.mm.bing.net/th?id=OIP.WZFN-O_pxtprBzCNGTRZfgHaHa&pid=Api&P=0&h=220"
          title="Fees"
        />
        <CustomSelect
          image="https://tse1.mm.bing.net/th?id=OIP._4ogFvvjUJLFqs_Dv9ADOwHaHZ&pid=Api&P=0&h=220"
          title="Time Table"
        />
        <CustomSelect
          image="https://tse4.mm.bing.net/th?id=OIP.7iiu7rkKcxHxBdmmxc0NfQHaFj&pid=Api&P=0&h=220"
          title="Payroll"
        />
        <CustomSelect
          image="http://cliparts.co/cliparts/ATb/jRo/ATbjRoyjc.png"
          title="Transport"
        />
        <CustomSelect
          image="https://tse2.mm.bing.net/th?id=OIP.JfS1NAK8xgOwxUpuGxDXUAHaHN&pid=Api&P=0&h=220"
          title="Examination"
        />
      </div>
    </div>
  );
};

export default Sidebar;
