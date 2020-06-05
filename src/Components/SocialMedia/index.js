import React, { useEffect, useState } from 'react';
import { SocialMediaSection, Social, IconClass, P, Span1, Span2 } from './style.js';
import axios from 'axios';

const SocialMedia = () => {

  const [socials, setSocial] = useState([]);
  useEffect(() => {
    axios.get('js/data.json').then(result => { setSocial(result.data.social) })
  }, []);

  const SocialList = socials.map((socialItem) => {
    return (
      <Social key={socialItem.id} type={socialItem.id}>
        <IconClass className={socialItem.icon}></IconClass>
        <P>
          <Span1>{socialItem.title}</Span1>
          <Span2>{socialItem.body}</Span2>
        </P>
      </Social>
    );
  });
  return (
    <SocialMediaSection> {SocialList} </SocialMediaSection>
  );//end return
}

export default SocialMedia;