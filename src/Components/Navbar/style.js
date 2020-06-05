/*
    ===============================
            Navbar Styles
    ===============================
*/
import styled from 'styled-components';


export const NavbarSection = styled.div`
         /*  padding: 10px 0; */
          overflow: hidden;
          background: #fff;
          position: relative;
          border-bottom: 1px solid #fd7500;
`,
 Logo = styled.div`
          width: 50%;
          float: left;
`,
 LogoText = styled.h2`
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 1px;
          cursor : pointer;
          width : 39%;
          transition : ease-in-out .5s;
    &:hover {
        letter-spacing : 5px;
        color: #eb5424;
    }
`,
 Container = styled.div`
          width: 85%;
          margin: auto;
`,
 Ul = styled.ul`
          width: 50%;
          float: left;
          list-style: none;
          padding : 0;
`,
 ListItem = styled.li`
          display: inline-block;
`,
 AnchorTag = styled.a`
          display: block;
          color: #222;
          text-decoration: none !important;
          padding: 10px 15px;
          font-weight: bold;
        
        &:hover {
            color : #eb5424
        }
`;
