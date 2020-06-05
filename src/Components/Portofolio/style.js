/*
    ===============================
            Portfolio Styles
    ===============================
*/
import styled from 'styled-components';

export const Portfolio = styled.div`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
    `,

    PortfolioTitle = styled.h2`
    text-align: center;
    font-size: 35px
    `,

    Span = styled.span`
    font-weight: normal
    `,

    PortfolioList = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
    `,

    PortfolioItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;

    color : ${props => props.active ? "#fff" : ""};
    background : ${props => props.active ? "#eb5424" : ""};
    transition : ease-in-out .4s;
    cursor : pointer;
    &:hover {
        background: #eb5424;
        color : white;
    }
    `,

    /* .portfolio .portfolio-list .portfolio-item.active {
        background: #eb5424;
        color: #fff
    } */

    ImageBox = styled.div`
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;

    &:hover > p{
        opacity : 1 ;
        height : 100%;
    }
    `,

    Image = styled.img`
    width: 100%
    `,

    Overlay = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    opacity: 0;
    transition : ease-in-out .5s ;
    `,

    OverlaySpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
    font-size: 15px;
    `;

