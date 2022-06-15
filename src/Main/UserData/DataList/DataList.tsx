import React from 'react';
import { DataItemStyle, DataListStyle } from './DataListStyle';
import { initalDataUser, UserDataType } from '../../../initialData';
import { InfoComponent } from '../InfoComponent';

export function DataList() {

  const Data : UserDataType = initalDataUser;

  return (
    <DataListStyle>
      {
        Data.BDArray.map( (itemId) => {
          const item = Data.basicData[itemId];
          return <DataItemStyle key={`DataItem_` + itemId}> <InfoComponent category={item.category} value={item.value}/> </DataItemStyle>
        })
      }
    </DataListStyle>
  );
}
