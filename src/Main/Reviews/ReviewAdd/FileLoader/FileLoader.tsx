import React, { useState } from 'react';
import { DeleteIcon, JpgIcon, LoadingIcon, PlusIcon } from '../../../../svg';
import { FileLoaderStyle, IconStyle, InputFLStyle, LabelFLStyle, TextStyle, FileInfoStyle, NameProgressStyle, FileNameStyle, ProgressBarStyle, DeleteWrapperStyle, LoadingWrapperStyle } from './FileLoaderStyle';

interface IFileLoaderProps {
  inForm: string,
}

// скрипт добавления файла
export function FileLoader({inForm}: IFileLoaderProps) {
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const fileLoader = () => {
    const form = document.getElementById(inForm) as HTMLFormElement; // переменная формы
    const input = document.getElementById(inForm + '_fileLoader') as HTMLInputElement; // переменная input
    const progressBar = document.getElementById(inForm + '_progressBar') as HTMLProgressElement; // переменная progress bar
    
    const fileList = input.files as FileList; // массив файлов в input
    const file = fileList? fileList[0] : undefined;
    
    if (fileName != file?.name) {
      setFileName(file?.name); // ререндер компонента с добавлением файла
    }
    
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "php/upload.php");

    xhr.upload.onprogress = (e: { loaded: number; total: number; }) => {
      console.log('Файл - ' + file?.name);
      console.log(`Отправлено ${e.loaded} из ${e.total} байт`);

      var percent = Math.floor((e.loaded / e.total) * 100); // считаем проценты загрузки
      progressBar.value = percent;

      console.log(progressBar.value);
    };

    xhr.onload = () => {
      (file?.name == undefined)? setLoading(true) : setLoading(false);

      progressBar.value = 100; // на всякий случай, в случае окончательной загрузки файла, заполняем progressbar
      console.log('Загружено');
    };

    xhr.onerror = () => {
      setFileName('Произошла ошибка.');
      setLoading(false);
      setError(true);
      
      progressBar.value = 100;
      console.log('Ошибка');
    }

    console.log('onChandge');

    var data = new FormData(form);
    xhr.send(data);

  }

  // скрипт удаления файла
  const removeFile = () => {
    const input = document.getElementById(inForm + '_fileLoader') as HTMLInputElement;
    const progressBar = document.getElementById(inForm + '_progressBar') as HTMLProgressElement;

    var data = '';
    var file = new File([data], ''); // файл ничего

    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;

    setFileName(undefined); // ререндер компонента с удалением файла
    setLoading(true);
    setError(false);

    progressBar.value = 0;

    console.log('Removed');
  }

  return (
    <>
      <FileLoaderStyle>
        {/* кнопка */}
        <LabelFLStyle htmlFor={inForm + '_fileLoader'}>
          <IconStyle>
            <PlusIcon />
          </IconStyle> 

          <TextStyle>
            Загрузить фото
          </TextStyle>
        </LabelFLStyle>

        {/* сам input, который скрыт */}
        <InputFLStyle type="file"  name={inForm + '_fileLoader'} id={inForm + '_fileLoader'} accept='.jpg, .jpeg' onInput={fileLoader}/>
      </FileLoaderStyle>

      <FileInfoStyle fileInfoDisplay={(fileName == undefined)? 'none' : 'flex'}> {/* В зависимости от того, есть файл в input или нет, показывается часть с загрузкой и именем файла*/}
        <JpgIcon />

        <NameProgressStyle>
          <FileNameStyle error={error}>{fileName}</FileNameStyle>
          <ProgressBarStyle error={error} id={inForm + '_progressBar'} max='100' ></ProgressBarStyle>
        </NameProgressStyle>

        { !loading && (
          <DeleteWrapperStyle onClick={removeFile}>
            <DeleteIcon />
          </DeleteWrapperStyle>
        )
        }

        { loading && (
          <LoadingWrapperStyle>
            <LoadingIcon/>
          </LoadingWrapperStyle>
        )
        }
      </FileInfoStyle>
    </>
  );
}
