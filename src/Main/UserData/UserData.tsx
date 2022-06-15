import React from 'react';
import { SectionHeader } from './SectionHeader/SectionHeader';
import { AboutStyle, NameDateContainer, PetStyle, UserDataStyle, IconStyle } from './UserdataStyle';
import { initalDataUser, UserDataType } from '../../initialData';
import { InfoComponent } from './InfoComponent';
import { DataList } from './DataList';
import { Date } from './Date';
import { DogFood } from '../../svg';


export function UserData() {
  const Data : UserDataType = initalDataUser;

  return (
    <UserDataStyle>
      <NameDateContainer>
        <SectionHeader text = {Data.name + ' ' + Data.surname} color={'var(--purple)'}/>
        <Date date={Data.birthdate}/>
      </NameDateContainer>

      <DataList />

      <AboutStyle>
        <InfoComponent category={Data.about.category} value={Data.about.value}/>
      </AboutStyle>

      <PetStyle>
        <IconStyle>
          <DogFood/>
        </IconStyle>
        <InfoComponent category={Data.pet.category} value={Data.pet.value}/>
      </PetStyle>
    </UserDataStyle>
  );
}
