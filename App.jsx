import React from 'react';

class App extends React.Component {
   render() 
   {
      return (
      <div className="container body">
        <div className="main_container">
          <div className="col-md-3 left_col">
            <div className="left_col scroll-view">
              <div className="navbar nav_title" style={{border: 0}}>
                <a href="index.html" className="site_title"> <span>Miracle Soft</span></a>
              </div>
              <div className="clearfix" />
              {/* menu profile quick info */}
              <div className="profile clearfix">
                <div className="profile_pic">
                  <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                </div>
                <div className="profile_info">
                  <span>Welcome,</span>
                  <h2>ChandraSekhar</h2>
                </div>
              </div>
              {/* /menu profile quick info */}
              <br />
              {/* sidebar menu */}
              <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                  <h3>General</h3>
                  <ul className="nav side-menu">
                    <li><a><i className="fa fa-home" /> Home <span className="fa fa-chevron-down" /></a>
                      <ul className="nav child_menu">
                        <li><a href="test.html">Dashboard</a></li>
                        <li><a href="#">Dashboard2</a></li>
                        <li><a href="#">Dashboard3</a></li>
                      </ul>
                    </li>
                    <li><a><i className="fa fa-bar-chart-o" /> User usage <span className="fa fa-chevron-down" /></a>
                      <ul className="nav child_menu">
                        <li><a href="presentday.html">Present Day</a></li>
                        <li><a href="month.html">Month</a></li>
                        <li><a href="year.html">Year</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /sidebar menu */}
              {/* /menu footer buttons */}
              <div className="sidebar-footer hidden-small">
                <a data-toggle="tooltip" data-placement="top" title="Settings">
                  <span className="glyphicon glyphicon-cog" aria-hidden="true" />
                </a>
                <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                  <span className="glyphicon glyphicon-fullscreen" aria-hidden="true" />
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Lock">
                  <span className="glyphicon glyphicon-eye-close" aria-hidden="true" />
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Logout">
                  <span className="glyphicon glyphicon-off" aria-hidden="true" />
                </a>
              </div>
              {/* /menu footer buttons */}
            </div>
          </div>
          {/* top navigation */}
          <div className="top_nav">
            <div className="nav_menu">
              <nav>
                <div className="nav toggle">
                  <a id="menu_toggle"><i className="fa fa-bars" /></a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  <li className>
                    <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <img src="images/img.jpg" alt />ChandraSekhar
                      <span className=" fa fa-angle-down" />
                    </a>
                    <ul className="dropdown-menu dropdown-usermenu pull-right">
                      <li><a href="javascript:;"> Profile</a></li>
                      <li>
                        <a href="javascript:;">
                          <span className="badge bg-red pull-right">50%</span>
                          <span>Settings</span>
                        </a>
                      </li>
                      <li><a href="javascript:;">Help</a></li>
                      <li><a href="login.html"><i className="fa fa-sign-out pull-right" /> Log Out</a></li>
                    </ul>
                  </li>
                  <li role="presentation" className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-envelope-o" />
                      <span className="badge bg-green">6</span>
                    </a>
                    <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                      <li>
                        <a>
                          <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>ChandraSekhar</span>
                            <span className="time">3 mins ago</span>
                          </span>
                          <span className="message">
                            Today you used 55 liters of water.
                          </span>
                        </a>
                      </li>
                      <li>
                        <div className="text-center">
                          <a>
                            <strong>See All Alerts</strong>
                            <i className="fa fa-angle-right" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* /top navigation */}
          {/* page content */}
          <div className="right_col" role="main">
            <div className>
              <div className="page-title">
                <div className="title_left">
                  <h3> Tank-O-Meter <small>   Smart Water Systems.</small></h3>
                </div>
                <div className="clearfix" />
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="x_panel">
                    <div className="x_title">
                      <h2>Present Day</h2>
                      <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Settings 1</a>
                            </li>
                            <li><a href="#">Settings 2</a>
                            </li>
                          </ul>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close" /></a>
                        </li>
                      </ul>
                      <div className="clearfix" />
                    </div>
                    <div className="x_content">
                      <div id="echart_guage" style={{height: 250}} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="x_panel">
                    <div className="x_title">
                      <h2>Month  <small>Usage</small></h2>
                      <ul className="nav navbar-right panel_toolbox">
                        <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Settings 1</a>
                            </li>
                            <li><a href="#">Settings 2</a>
                            </li>
                          </ul>
                        </li>
                        <li><a className="close-link"><i className="fa fa-close" /></a>
                        </li>
                      </ul>
                      <div className="clearfix" />
                    </div>
                    <div className="x_content">
                      <canvas id="mybarChart" />
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>Year <small>Usage</small></h2>
                        <ul className="nav navbar-right panel_toolbox">
                          <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                          </li>
                          <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                            <ul className="dropdown-menu" role="menu">
                              <li><a href="#">Settings 1</a>
                              </li>
                              <li><a href="#">Settings 2</a>
                              </li>
                            </ul>
                          </li>
                          <li><a className="close-link"><i className="fa fa-close" /></a>
                          </li>
                        </ul>
                        <div className="clearfix" />
                      </div>
                      <div className="x_content">
                        <canvas id="lineChart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div></div>

       );
   }
}

export default App;