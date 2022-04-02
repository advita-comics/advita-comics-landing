import React from 'react';

function SuccessIcon() {
  return (
    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"
      />
    </svg>
  );
}

export {
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
};
