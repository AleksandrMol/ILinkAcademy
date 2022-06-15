import styled from "styled-components";
import { device, Tdevices } from "../../../../devices";

interface IFileLoaderStyleProps {
    fileInfoDisplay: string,
}

export const FileLoaderStyle = styled.div`
    align-self: flex-end;
`;

export const LabelFLStyle = styled.label`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 227px;
    height: 50px;

    color: var(--white);
    font-weight: 600;

    border: none;
    border-radius: var(--border-radius);
    background-color: var(--purple);
    
    &:disabled{
        background-color: var(--grey);
    }

    &::before{
        position: absolute;
        content: '';

        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;

        background-color: var(--purple-hover);
        z-index: 0;

        transition: all 0.3s ease-in-out;
    }

    &:hover::before{
        right: 0;
    }

    @media ${device.tablet}{
        width: 149px;
        height: 42px;
    }
`;

export const IconStyle = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 10px;

    transform: translateY(2px);

    @media ${device.tablet}{
        height: 10px;
        width: 10px;

        svg{
            width: 10px;
            height: 10px;
        }
    }
`;

export const TextStyle = styled.span`
    z-index: 1;

    @media ${device.tablet}{
        font-size: 14px;
    }
`;

export const InputFLStyle = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    position: absolute;
    z-index: -10;
`;

export const FileInfoStyle = styled.div<IFileLoaderStyleProps>`
    display: ${props => props.fileInfoDisplay};
    align-items: center;
    min-width: 250px;
    margin-top: 12px;
    padding: 14px 12px;

    background-color: var(--light-grey-2);
    border-radius: var(--border-radius);

    @media ${device.tablet}{
        min-width: auto;
        width: 100%;
    }
`;

export const NameProgressStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    height: 28px;
    margin-right: 16px;
    margin-left: 12px;
`;

interface IFileNameProps{
    error: boolean,
}

export const FileNameStyle = styled.span<IFileNameProps>`
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.error? 'var(--red)' : 'var(--dark-grey)'} ;
`;

interface IprogressBarProps{
    error: boolean,
}

export const ProgressBarStyle = styled.progress<IprogressBarProps>`

    width: 100%;
    height: 4px;
    
    border: none;
    border-radius: var(--border-radius);

    transition: all 0.1s linear;
    &::-moz-progress-bar{
        border-radius: var(--border-radius);
    }
    &::-webkit-progress-bar{

        background-color: var(--white-purple-hover);
        border-radius: var(--border-radius);
    }
    &::-webkit-progress-value{

        background-color: ${props => props.error? 'var(--red)' : 'var(--purple)'} ;
        border-radius: var(--border-radius);
    }
`;

export const DeleteWrapperStyle = styled.div`
    height: 20px;

    cursor: pointer;
`;
export const LoadingWrapperStyle = styled.div`
    width: 20px;
    height: 20px;

    animation-duration: 1s;
    animation-name: loading;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes loading {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
`;