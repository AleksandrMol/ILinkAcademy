import React from 'react';

interface IEyeIcon {
  id?: string,
  onClick?: () => void,
}

export function EyeIcon({id, onClick}: IEyeIcon) {
  return (
    <svg onClick={onClick} id={id} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Iconly/Light/Show">
            <g id="Show">
                <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48892 15.806 4.75092 11.998 4.75092H12.002C8.194 4.75092 4.711 7.48892 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="#585CC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </g>
    </svg>
  );
}
