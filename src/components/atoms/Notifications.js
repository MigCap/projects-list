import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  // console.log(props);
  return (
    <div className="section">
      <div className="center-align blue-grey darken-4 rounded" style={{ padding: "1em 0" }}>
        <span className="card-title orange-text text-lighten-2">
          <i className="material-icons orange-text text-lighten-2">
            notifications_active
          </i>
        </span>
        <p className="orange-text text-lighten-2">NOTIFICATIONS</p>
      </div>
      <div className="card z-depth-0 border-none rounded blue-grey darken-4">
        <div className="card-content">
          <ul className="online-users">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id} style={{paddingBottom: "20px"}}>
                    <span className="orange-text text-lighten-2">{item.user} </span>
                    <span className="white-text lighten-3">{item.content}</span>
                    <div className="note-date grey-text lighten-4">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
