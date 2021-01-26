import React from "react";
import s from "./ProfileInfo.module.css";

// "https://i.stack.imgur.com/V7ZYG.png?s=328&g=1"

class ProfileInfo extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    return (
      <div className={s.UserInfo}>
        <div className={s.UserInfo__Image}>
          <img
            src={
              this.props.profile.photos.large
                ? this.props.profile.photos.large
                : "https://www.clipartmax.com/png/full/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"
            }
            alt=""
          />
        </div>
        <div className={s.UserInfo__Information}>
          <span className={s.ProfileName}>{this.props.profile.fullName}</span>

          <div className={s.ProfileStatus}>
            {!this.state.editMode && (
              <span
                onClick={() => {
                  this.activateEditMode.apply(this);
                }}
              >
                {this.props.status ? this.state.status : "Without status"}
              </span>
            )}
            {this.state.editMode && (
              <div className={s.ProfileStatusEditing}>
                <input
                  onChange={this.onStatusChange}
                  autoFocus={true}
                  onBlur={() => {
                    this.deactivateEditMode.apply(this);
                  }}
                  type="text"
                  value={this.state.status}
                ></input>
              </div>
            )}
          </div>

          <span className={s.ProfileContacts}>
            Contacts: <br />
            <span className={s.ProfileContacts__Info}>
              Facebook: {this.props.profile.contacts.facebook}
              <br />
              VK: {this.props.profile.contacts.vk}
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
