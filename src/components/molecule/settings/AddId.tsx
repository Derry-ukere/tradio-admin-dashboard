import React from 'react';

const AddId = () => {
  return (
    <div className="row justify-content-center h-100 align-items-center">
      <div className="col-xl-5 col-md-6">
        <div className="auth-form card">
          <div className="card-body">
            <form action="verify-step-3.html" className="identity-upload">
              <div className="identity-content">
                <h4>Upload your ID card</h4>
                <span>(Driving License or Government ID card)</span>
                <p>Uploading your ID helps as ensure the safety and security of your founds</p>
              </div>
              <div className="form-group">
                <label className="mr-sm-2">Upload Front ID </label>
                <span className="float-right">Maximum file size is 2mb</span>
                <div className="file-upload-wrapper" data-text="front.jpg">
                  <input name="file-upload-field" type="file" className="file-upload-field" />
                </div>
              </div>
              <div className="form-group">
                <label className="mr-sm-2">Upload Back ID </label>
                <span className="float-right">Maximum file size is 2mb</span>
                <div className="file-upload-wrapper" data-text="back.jpg">
                  <input name="file-upload-field" type="file" className="file-upload-field" />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success pl-5 pr-5">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AddId;
