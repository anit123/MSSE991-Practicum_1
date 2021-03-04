import React from "react";
import styled from "styled-components";
import Dealsitaly from "./Dealsitaly"

const WeeklyDeals = () => {
  return (
    <WeeklyDealsWrapper>
      <div className="container">
        <h2 className="main-heading">Weekly Deals</h2>
        <div className="row">
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div className="card">
              <div className="image-banner">
                <img src="/images/img1.jpg" alt="" />
              </div>
              <div className="card-body">
                <div className="location">
                  <span>Italy</span>,<span className="pl-2">Positano</span>
                </div>
                <div className="price">
                  <span>$</span>333
                </div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  molestiae s commodi. Veniam molestiae eos odit cum....
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div className="card">
              <div className="image-banner">
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className="card-body">
                <div className="location">
                  <span>Switzerland</span>,<span className="pl-2">Geneva</span>
                </div>
                <div className="price">
                  <span>$</span>333
                </div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  molestiae s commodi. Veniam molestiae eos odit cum.....
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div className="card">
              <div className="image-banner">
                <img src="/images/img3.jpg" alt="" />
                <div className="tags">
                  <span>Popular</span>
                </div>
              </div>
              <div className="card-body">
                <div className="location">
                  <span>Usa</span>,<span className="pl-2">Newyork</span>
                </div>
                <div className="price">
                  <span>$</span>333
                  <del>
                    <span>$</span>333
                  </del>
                </div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  molestiae s commodi. Veniam molestiae eos odit cum....
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WeeklyDealsWrapper>
  );
};

const WeeklyDealsWrapper = styled.section`
padding-top:60px;
.card{
    border: none;
    position: relative;
    /* box-shadow: 0px 0px 0px 1px #dfdede; */
        box-shadow: rgb(0 0 0 / 7%) 0px 0px 40px;
    margin-top:30px;
    cursor: pointer;
    .tags{
        position: absolute;
    top: 10px;
    left: 10px;
    span{
            background-color: #bd2130;
    color: #fff;
    padding: 2px 10px;
    border-radius: 5px;
    font-size: 11px;
}
    }
    }
}
.main-heading{
    font-size:40px;
    font-weight:700;
}
.image-banner img{
    width:100%;
}
.location{
    color:#0062cc;
    font-size:14px;
}
.des{
    font-size:14px;
    margin-top:10px;
    color:#6e6e6e

}
.price{
        font-weight: 800;
    margin-top: 10px;
    font-size: 20px;
    del{
            margin-left: 20px;
    color: gray;
    }
}
`;

export default WeeklyDeals;
