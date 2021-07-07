import React from 'react';

const Success = () => {
  return (
    <div className="col-xl-5 col-md-6">
      <div className="auth-form card">
        <div className="card-body">
          <form action="settings-account.html" className="identity-upload">
            <div className="identity-content">
              <span className="icon"><i className="bi bi-check-lg" /></span>
              <h4>Congratulation. Your bank added</h4>
              <p>Efficiently provide access to installed base core competencies and end end
               data Interactively target equity.</p>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success pl-5 pr-5">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Success;
