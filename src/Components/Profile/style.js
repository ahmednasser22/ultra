/*
    ===============================
       Profile + Skills Styles
    ===============================
*/
import styled from 'styled-components';
export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`,

    ProfileSection = styled.div` 
    width: 50%;
    float: left;
`,

    ProfileList = styled.ul`
    list-style: none
`,

    ProfileItem = styled.li`
    margin-bottom: 8px
`,

    ProfileItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`,

    Web = styled.span`
    font-weight: normal;
    color: #eb5424;
    cursor : pointer
`,

    SkillsSection = styled.div`
    width: 50%;
    float: left;
`,

    SkillsDetails = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`,

    SkillBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`,

    BarTitle = styled.span`
    float: left;
`,

    BarPercentage = styled.span`
    float: right;
    margin-right: 100px
`,

    BackBar = styled.div`
    height: 2px;
    clear: both;
    background: #e2dcdf;
    position: relative;
    top: 5px
`,

    FrontBar = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.Percentage === "100%" ? "100%" : ""};
    width: ${props => props.Percentage === "80%" ? "80%" : ""};
    width: ${props => props.Percentage === "70%" ? "70%" : ""};
`,

    ProfileTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`,
    SkillsTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`,

    ProfileSpan = styled.span`
    font-weight: normal;
`,

    SkillsSpan = styled.span`
    font-weight: normal;
`;

