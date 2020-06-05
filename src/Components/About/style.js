/*
    ===============================
            Creative Styles
    ===============================
*/
import styled from 'styled-components';
export const Creative = styled.div`
    height: 500px;
    background: url('images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position : relative;
`,
    Overlay = styled.div`
    position: absolute;
        /* top: 0; */
        height: 100%;
        width: 100%;
        background-color: #dcc5c55e;
`,
    CreativeInfo = styled.div` 
    width: 50%;
    float: right;
`,

    InfoTitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 20px;
`,

    Span = styled.span`
    font-weight: normal
`,

    InfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    margin-top : 20px
`,

    InfoDetails = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    letter-spacing : 1.3px
`,
    AnchorTag = styled.a`
    text-decoration: none;
    display : inline-block;
    padding : 0;
`;

