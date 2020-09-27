import React from 'react';

const Profile = () => {
  return (
    <div className="col-lg-8 col-12">
      <div className="border-bottom pb-4">
        <h5>Hi Krista Joseph</h5>
        <p className="text-muted mb-0">
          Welcome to your personalised dashboard.
        </p>
      </div>
      <div className="border-bottom pb-4">
        <div className="row">
          <div className="col-md-6 mt-4">
            <h5>Personal Details :</h5>
            <div className="mt-4">
              <div className="media align-items-center">
                <i data-feather="mail" className="fea icon-ex-md text-muted mr-3" />
                <div className="media-body">
                  <h6 className="text-primary mb-0">Name :</h6>
                  <a href="javascript:void(0)" className="text-muted">
                   Krista Joseph
                  </a>
                </div>
              </div>
              <div className="media align-items-center mt-4">
                <i data-feather="mail" className="fea icon-ex-md text-muted mr-3" />
                <div className="media-body">
                  <h6 className="text-primary mb-0">Username :</h6>
                  <a href="javascript:void(0)" className="text-muted">
                    kristaj33
                  </a>
                </div>
              </div>
              <div className="media align-items-center mt-4">
                <i data-feather="mail" className="fea icon-ex-md text-muted mr-3" />
                <div className="media-body">
                  <h6 className="text-primary mb-0">Email :</h6>
                  <a href="javascript:void(0)" className="text-muted">
                    kristajoseph0203@mail.com
                  </a>
                </div>
              </div>
              <div className="media align-items-center mt-3">
                <i data-feather="gift" className="fea icon-ex-md text-muted mr-3" />
                <div className="media-body">
                  <h6 className="text-primary mb-0">Birthday :</h6>
                  <p className="text-muted mb-0">2nd March, 1996</p>
                </div>
              </div>
              <div className="media align-items-center mt-3">
                <i
                  data-feather="map-pin"
                  className="fea icon-ex-md text-muted mr-3"
                />
                <div className="media-body">
                  <h6 className="text-primary mb-0">Location :</h6>
                  <a href="javascript:void(0)" className="text-muted">
                    Beijing, China
                  </a>
                </div>
              </div>
              <div className="media align-items-center mt-3">
                <i
                  data-feather="phone"
                  className="fea icon-ex-md text-muted mr-3"
                />
                <div className="media-body">
                  <h6 className="text-primary mb-0">Cell No :</h6>
                  <a href="javascript:void(0)" className="text-muted">
                    (+12) 1254-56-4896
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;