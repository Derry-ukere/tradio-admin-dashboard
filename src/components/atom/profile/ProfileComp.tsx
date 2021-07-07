import React from 'react';

const ProfileComp = () => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="card profile_card">
        <div className="card-body">
          <div className="media">
            <img className="mr-3 rounded-circle mr-0 mr-sm-3" src="https://demo.themefisher.com/tradio/images/profile/2.png" width={60} height={60} alt="profile pix" />
            <div className="media-body">
              <span>Hello</span>
              <h4 className="mb-2">Saiful Islam</h4>
              <p className="mb-1"> <span><i className="bi bi-telephone-fill mr-2 text-primary" /></span> +1
              235 5547</p>
              <p className="mb-1"> <span><i className="bi bi-envelope mr-2 text-primary" /></span>
              hello@example.com
              </p>
            </div>
          </div>
          <ul className="card-profile__info">
            <li>
              <h5 className="mr-4">Address</h5>
              <span className="text-muted">House 14, Road 9, Gulshan, Dhaka</span>
            </li>
            <li className="mb-1">
              <h5 className="mr-4">Total Log</h5>
              <span>103 Time (Today 5 Times)</span>
            </li>
            <li>
              <h5 className="text-danger mr-4">Last Log</h5>
              <span className="text-danger">3 February, 2020, 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
