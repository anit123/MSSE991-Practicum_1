import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import useToggle from "../../utils/useToggleUtility";

function Sidebar(props) {
  const [toggle, setToggle] = useToggle(false);
  const handleShowHide = () => setToggle(!toggle);
  const [toggleEvt, handleToggleEvt] = useToggle(false);
  const [toggleBooking, handleToggleBooking] = useToggle(false);
  const [toggleSlider, handleToggleSlider] = useToggle(false);
  const [toggleBlog, handleToggleBlog] = useToggle(false);
  return (
    <SidebarSection>
      <div>
        <div className="app-sidebar sidebar-shadow">
          <div className="app-header__logo">
            <div className="logo-src" />
            <div className="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  className="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="app-header__mobile-menu">
            <div>
              <button
                type="button"
                className="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
          <div className="app-header__menu">
            <span>
              <button
                type="button"
                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
              >
                <span className="btn-icon-wrapper">
                  <i className="fa fa-ellipsis-v fa-w-6" />
                </span>
              </button>
            </span>
          </div>
          <div className="scrollbar-sidebar ps ps--active-y">
            <div className="app-sidebar__inner">
              <ul className="vertical-nav-menu">
                <li>
                  <Link to={`${props.match.url}`}>Home</Link>
                </li>

                <li>
                  <Link to="/">Back To Home</Link>
                </li>
                <li>
                  <Link to={`${props.match.url}/flight-details`}>
                    Flight Details
                  </Link>
                </li>
                <li>
                  <Link to={`${props.match.url}/add-location`}>
                    Add Location
                  </Link>
                </li>
                <li>
                  <Link to={`${props.match.url}/booking-details`}>Booking</Link>
                </li>
                {/* <li onClick={handleShowHide}>
                  <Link to="#">
                    <i className="metismenu-icon pe-7s-diamond"></i>
                    Courses
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                  </Link>
                  {toggle ? (
                    <ul>
                      <li>
                        <Link to={`${props.match.url}/courses`}>Courses</Link>
                      </li>
                      <li>
                        <Link to={`${props.match.url}/addCourses`}>
                          Add Courses
                        </Link>
                      </li>
                      <li>
                        <Link to={`${props.match.url}/addSchedule`}>
                          Add Courses Schedule
                        </Link>
                      </li>
                      <li>
                        <Link to={`${props.match.url}/addCoursesImage`}>
                          Add courses Image
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li> */}
                {/* <li onClick={handleToggleEvt}>
                  <Link to="#">
                    <i className="metismenu-icon pe-7s-diamond"></i>
                    Events
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                  </Link>
                  {toggleEvt ? (
                    <ul>
                      <li>
                        <Link to={`${props.match.url}/events`}>Events</Link>
                      </li>
                      <li>
                        <Link to={`${props.match.url}/addEvents`}>
                          {" "}
                          Add Events
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li> */}
                {/* <li onClick={handleToggleBooking}>
                  <Link to="#">
                    <i className="metismenu-icon pe-7s-diamond"></i>
                    Booking
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                  </Link>
                  {toggleBooking ? (
                    <ul>
                      <li>
                        <Link to={`${props.match.url}/booking`}>Booking</Link>
                      </li>
                      <li>
                        <Link to={`${props.match.url}/filterbooking`}>
                          Filter Booking
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li> */}
                {/* <li onClick={handleToggleSlider}>
                  <Link to="#">
                    <i className="metismenu-icon pe-7s-diamond"></i>
                    Slider
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                  </Link>
                  {toggleSlider ? (
                    <ul>
                      <li>
                        <Link to={`${props.match.url}/slider`}>Slider</Link>
                      </li>
                      <li>
                        <Link to={`${props.match.url}/addSlider`}>
                          Add Slider
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li> */}
                {/* <li onClick={handleToggleBlog}>
                  <Link to="#">
                    <i className="metismenu-icon pe-7s-diamond"></i>
                    Blog
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                  </Link>
                  {toggleBlog ? (
                    <ul>
                      <li>
                        <Link to={`${props.match.url}/blog`}>Blog</Link>
                      </li>
                      <li>
                        <Link to={`${props.match.url}/addBlog`}>Add Blog</Link>
                      </li>
                    </ul>
                  ) : null}
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SidebarSection>
  );
}

export default withRouter(Sidebar);

const SidebarSection = styled.div`
  font-size: 16px;
  i {
    font-size: 25px !important;
  }
`;
