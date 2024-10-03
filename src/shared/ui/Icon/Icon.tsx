import { ReactElement } from 'react';

type Icons = { [key: string]: ReactElement };

export const icons: Icons = {
  close: (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L10.5 10.5M20 20L10.5 10.5M10.5 10.5L20 1M10.5 10.5L1 20"
        stroke="white"
      />
    </svg>
  ),
  left: (
    <svg
      width="12"
      height="24"
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 1L1.20711 11.2929C0.816582 11.6834 0.816582 12.3166 1.20711 12.7071L11.5 23"
        stroke="#B3B3B3"
        strokeLinecap="round"
      />
    </svg>
  ),
  right: (
    <svg
      width="13"
      height="24"
      viewBox="0 0 13 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 23L11.2929 12.7071C11.6834 12.3166 11.6834 11.6834 11.2929 11.2929L0.999999 1"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  ),
  top: (
    <svg
      width="24"
      height="13"
      viewBox="0 0 24 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 12L12.7071 1.70711C12.3166 1.31658 11.6834 1.31658 11.2929 1.70711L1 12 "
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  ),
  bottom: (
    <svg
      width="24"
      height="13"
      viewBox="0 0 24 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L11.2929 11.2929C11.6834 11.6834 12.3166 11.6834 12.7071 11.2929L23 1"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  ),
};
