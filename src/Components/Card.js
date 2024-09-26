import React from "react";
import profile from "../Assets/profile.png";
import profile1 from "../Assets/profile1.png";
import profile4 from "../Assets/profile4.jpeg";
import profile5 from "../Assets/profile5.jpeg";
import profile6 from "../Assets/profile6.png";
import profile7 from "../Assets/profile7.png";
import Backlog from "../Assets/icons/Backlog.svg";
import Todo from "../Assets/icons/To-do.svg"
import cancel from "../Assets/icons/Cancelled.svg"
import inprogress from "../Assets/icons/in-progress.svg"
import Done from "../Assets/icons/Done.svg"
import Nopriority from "../Assets/icons/No-priority.svg"
import highpri from "../Assets/icons/Img - High Priority.svg"
import mediumpri from "../Assets/icons/Img - Medium Priority.svg"
import lowpri from "../Assets/icons/Img - Low Priority.svg"
import urgent from "../Assets/icons/SVG - Urgent Priority grey.svg"

const Card = ({
  id,
  title,
  tag,
  userId,
  userData,
  priority,
  grouping,
  statusMapping,
}) => {
  const user = userData.find((user) => user.id === userId);

  return (
    <div className="card">
      <div className="card-header">
        <div className="status-heading">
          {grouping === "users" || grouping === "priority" ? (
            statusMapping[id] === "Todo" ? (
              <i ><img src={Todo}/></i>
              
            ) : statusMapping[id] === "In progress" ? (
              <i ><img src={inprogress}/></i>
            ) : statusMapping[id] === "Backlog" ? (
              <i ><img src={Backlog}/></i>
            ) : statusMapping[id] === "Done" ? (
              <i ><img src={Done}/></i>
            ) : (
              <i ><img src={cancel}/></i>
            )
          ) : null}
          <p>{id}</p>
        </div>
        {grouping !== "users" ? (
          <div
            className={
              user && !user.available
                ? "user-avatar-unavailable"
                : "user-avatar"
            }
          >
            <img
              src={
                userId === "usr-1"
                  ? profile1
                  : userId === "usr-2"
                  ? profile6
                  : userId === "usr-3"
                  ? profile7
                  : userId === "usr-4"
                  ? profile5
                  : userId === "usr-5"
                  ? profile4
                  : profile
              }
              className={
                user && !user.available
                  ? "user-avatar-unavailable"
                  : "user-avatar"
              }
              alt="user"
            ></img>
          </div>
        ) : null}
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-footer">
        {grouping !== "priority" ? (
          <div className="feature-container">
            {priority === "0" ? (
              <i ><img src={Nopriority}/></i>
            ) : priority === "1" ? (
              <i ><img src={lowpri}/></i>
            ) : priority === "2" ? (
              <i ><img src={mediumpri}/></i>
            ) : priority === "3" ? (
              <i ><img src={highpri}/></i>
            ) : (
              <i ><img src={urgent}/></i>
            )}
          </div>
        ) : null}
        {tag?.map((value, index) => {
          return (
            <div className="feature-container" key={index}>
              <div className="alert-icon"></div>
              <div className="feature-request">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
