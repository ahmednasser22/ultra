/*
    ===============================
            Socail Styles
    ===============================
*/
import styled from 'styled-components';
export const SocialMediaSection  = styled.div`
height: auto;
overflow: hidden
`,
Social = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.type === 1 ? "#3b5998" : ' '};
    background: ${props => props.type === 2 ? "#498cbf" : ' '};
    background: ${props => props.type === 3 ? "#cc2127" : ' '};
    `,

/* .social-media .social.face {
    background: #3b5998;
}

.social-media .social.twitter {
    background: #498cbf;
}

.social-media .social.pin {
    background: #cc2127;
} */

IconClass = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`,

P = styled.p`
    font-weight: bold;
    color: #fff
    `,

Span1 = styled.span`
    display: block;
    margin-bottom: 8px;
    font-size: 20px;
    text-transform: uppercase;
`,

Span2 = styled.span`
    font-weight: normal;
    font-size: 15px;
    cursor : pointer;
`;