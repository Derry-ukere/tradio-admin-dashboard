import React, { FC } from 'react';
import Header from '../molecule/header/Header';
import PageTitle from '../molecule/page-title/PageTitle';
import SideBar from '../molecule/side-bar/SideBar';
import Footer from '../molecule/footer/Footer';


const Dashboard: FC = ({ children }) => {
  return (
    <div className="show" id="dashboard" >
      <Header />
      <SideBar />
      <PageTitle />
      <div className="content-body">
        <div className="container">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
