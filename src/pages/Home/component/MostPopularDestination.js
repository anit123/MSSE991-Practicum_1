import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';

const MostPopularDestination = () => {
    return <ContentWrapper> <div className="container" >
        <h2>Most Popular Destination.</h2>
        <div className="row">
            <div className="col-md-3 mt-4">
                <div className="banner ">
                    <div className="des">
                        <span>Itly</span>
                    </div>
                    <img src="images/popular3.jpg"  alt=""/>
                </div>
            </div>
            <div className="col-md-3  mt-4">
                <div className="banner">
                    <div className="des">
                        <span>India</span>
                    </div>
                    <img src="images/popular2.jpg"  alt=""/>
                </div>
            </div>
            <div className="col-md-3  mt-4">
                <div className="banner">
                    <div className="des">
                        <span>Bhutan</span>
                    </div>
                    <img src="images/popular3.jpg"  alt=""/>
                </div>
            </div>
            <div className="col-md-3  mt-4">
                <div className="banner">
                    <div className="des">
                        <span>Nepal</span>
                    </div>
                    <img src="images/img1.jpg"  alt=""/>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="banner">
                    <div className="des">
                        <span>China</span>
                    </div>
                    <img src="images/img3.jpg"  alt=""/>
                </div>
            </div>
            <div className="col-md-3  mt-4">
                <div className="banner">
                    <div className="des">
                        <span>America</span>
                    </div>
                    <img src="images/img1.jpg"  alt=""/>
                </div>
            </div>
            <div className="col-md-3  mt-4">
                <div className="banner">
                    <div className="des">
                        <span>Itly</span>
                    </div>
                    <img src="images/img3.jpg"  alt=""/>
                </div>
            </div>
            <div className="col-md-3  mt-4">
                <div className="banner">
                    <div className="des">
                        <span>Thailand</span>
                    </div>
                    <img src="images/img4.jpg"  alt=""/>
                </div>
            </div>
        </div>
         <button type="submit" class="btn btn-primary mt-4">
                  View All
                       <BsArrowRight/>
            </button>
    </div>
        </ContentWrapper>
};


const ContentWrapper = styled.div`
padding-top:60px;
h2{
     font-size:40px;
    font-weight:700;
}
.banner img{
    width:100%;
    cursor: pointer;
}
.banner{
    position: relative;
}
.des{
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #0f0f15;
    padding: 1px 23px;
    font-size: 16px;
    border-radius: 5px;
    color: #fffefe;
    text-transform:capitalize;
}
button{
     background-color:#2632be !important;
  padding: 7px 30px;
    border-radius: 10px;
    box-sizing:border-box;
    svg{
      font-size: 25px;
    margin-left: 10px;
    }
}
`
export default MostPopularDestination;