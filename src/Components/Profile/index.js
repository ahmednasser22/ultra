import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ProfileSkills, ProfileSection, ProfileList, ProfileItem, ProfileItemSpan,
  Web, SkillsSection, SkillsDetails, SkillBar, BarTitle, BarPercentage, BackBar,
  FrontBar, ProfileTitle, SkillsTitle, ProfileSpan, SkillsSpan
} from './style.js';

const Profile = () => {

  const [Front_Bars, setBars] = useState([]);
  useEffect(() => {
    axios.get('js/data.json').then(result => { setBars(result.data.profile) });
  }, []);

  const BarsList = Front_Bars.map(BarItem => {
    return (
      <SkillBar key = {BarItem.id} >
        <BarTitle>{BarItem.title}</BarTitle>
        <BarPercentage>{BarItem.percentage}</BarPercentage>
        <BackBar>
          <FrontBar Percentage = {BarItem.percentage}></FrontBar>
        </BackBar>
      </SkillBar>
    );
  });

  return (
    <ProfileSkills>
      <div className="container">
        <ProfileSection>
          <ProfileTitle><ProfileSpan>My </ProfileSpan>Profile</ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <ProfileItemSpan>Name</ProfileItemSpan>
                        Ahmed Nasser
              </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Birthday</ProfileItemSpan>
                        21/1/1996
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Address</ProfileItemSpan>
                        Ain shams
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Phone</ProfileItemSpan>
                        4444 5555 6666
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Email</ProfileItemSpan>
                        hamza@hamza.com
            </ProfileItem>
            <ProfileItem>
              <ProfileItemSpan>Website</ProfileItemSpan>
              <Web>www.google.com</Web>
            </ProfileItem>

          </ProfileList>
        </ProfileSection>

        <SkillsSection>
          <SkillsTitle>Some <SkillsSpan>skills</SkillsSpan></SkillsTitle>
          <SkillsDetails>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDetails>

        {BarsList}

          {/*           <div class="bar">
            <span class="title">CSS3</span>
            <span class="perc">90%</span>
            <div class="parent">
              <span class="sp2"></span>
            </div>
          </div>

          <div class="bar">
            <span class="title">Photoshop</span>
            <span class="perc">80%</span>
            <div class="parent">
              <span class="sp3"></span>
            </div>
          </div> */}

        </SkillsSection>
      </div>
    </ProfileSkills>


  );//end return
}

export default Profile;