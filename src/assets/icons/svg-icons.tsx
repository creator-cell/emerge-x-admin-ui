export const DashboardIcon = ({ fill }: { fill?: string }) => {
  const outerColor = fill || "none";
  const strokeColor = fill ? "white" : "#292D32";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={outerColor}
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 18.5C16.6 18.5 17.5 17.6 17.5 16.5V7.5C17.5 6.4 16.6 5.5 15.5 5.5C14.4 5.5 13.5 6.4 13.5 7.5V16.5C13.5 17.6 14.39 18.5 15.5 18.5Z"
        stroke={strokeColor}
        fill={fill ? strokeColor : "none"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 18.5C9.6 18.5 10.5 17.6 10.5 16.5V13C10.5 11.9 9.6 11 8.5 11C7.4 11 6.5 11.9 6.5 13V16.5C6.5 17.6 7.39 18.5 8.5 18.5Z"
        stroke={strokeColor}
        fill={fill ? strokeColor : "none"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


  
  export const TaskListIcon = ({ fill }: { fill?: string }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z"
          fill={fill || "none"} // Default to no fill (none) if no `fill` prop is provided
          stroke={fill ? "none" : "#000000"} // Apply stroke color black only if `fill` is not provided
        />
        <path
          d="M22 12.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V12.9C13.5 14.4 14.14 15 15.73 15H19.77C21.36 15 22 14.4 22 12.9Z"
          fill={fill || "none"} // Default to no fill (none) if no `fill` prop is provided
          stroke={fill ? "none" : "#000000"} // Apply stroke color black only if `fill` is not provided
        />
      </svg>
    );
  };
  
  
  export const ClientListIcon = ({ fill }: { fill?: string }) => {
    const outerColor = fill || "none";
    const strokeColor = fill ? "white" : "#303030";
    
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={outerColor}>
        <path
          d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H12.9C14.4 10.5 15 9.86 15 8.27V4.23C15 2.64 14.4 2 12.9 2Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export const DemoRequestIcon = ({ fill }: { fill?: string }) => {
    const outerColor = fill || "none";
    const innerColor = fill ? "white" : "#303030";
    
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={outerColor}>
        <path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke={fill ? "none" : "#303030"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.1 12V10.52C9.1 8.61 10.45 7.84 12.1 8.79L13.38 9.53L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.1 15.38 9.1 13.48V12Z"
          fill={innerColor}
          stroke={fill ? "none" : "#303030"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  
  
  export const TeamIcon = ({ fill }: { fill?: string }) => {
    const strokeColor = fill || "#303030";
    const fillColor = fill || "none";
    
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fillColor}>
        <path
          d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  

  export const ChatIcon = ({ fill }: { fill?: string }) => {
    const strokeColor = fill || "#303030";
    const fillColor = fill || "none";
    const innerStrokeColor = fill ? "white" : strokeColor;
    
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fillColor}>
        <path
          d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12.86C22 15.15 20.82 17.18 19 18.46L17.66 21.41C17.35 22.08 16.45 22.21 15.98 21.64L14.5 19.86C12.08 19.86 9.92001 18.79 8.57001 17.12L9.5 16C13.64 16 17 12.87 17 9C17 7.95 16.75 6.96001 16.3 6.07001C19.57 6.82001 22 9.57999 22 12.86Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 9H12"
          stroke={innerStrokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  

  export const SupportIcon = ({ fill }: { fill?: string }) => {
    const strokeColor = fill || "#303030";
    const fillColor = fill || "none";
    const innerStrokeColor = fill ? "white" : strokeColor;
    
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fillColor}>
        <path
          d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
          stroke={innerStrokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.89999 4.92999L8.43999 8.45999"
          stroke={innerStrokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.89999 19.07L8.43999 15.54"
          stroke={innerStrokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.05 19.07L15.51 15.54"
          stroke={innerStrokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.05 4.92999L15.51 8.45999"
          stroke={innerStrokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export const SearchIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4.5C6.93913 4.5 5.92172 4.92143 5.17157 5.67158C4.42143 6.42172 4 7.43914 4 8.5C4 9.56087 4.42143 10.5783 5.17157 11.3284C5.92172 12.0786 6.93913 12.5 8 12.5C9.06087 12.5 10.0783 12.0786 10.8284 11.3284C11.5786 10.5783 12 9.56087 12 8.5C12 7.43914 11.5786 6.42172 10.8284 5.67158C10.0783 4.92143 9.06087 4.5 8 4.5ZM2 8.5C1.99988 7.55571 2.22264 6.62472 2.65017 5.78274C3.0777 4.94077 3.69792 4.2116 4.4604 3.65453C5.22287 3.09746 6.10606 2.72822 7.03815 2.57684C7.97023 2.42546 8.92488 2.49621 9.82446 2.78335C10.724 3.07049 11.5432 3.56591 12.2152 4.2293C12.8872 4.89269 13.3931 5.70534 13.6919 6.60114C13.9906 7.49693 14.0737 8.4506 13.9343 9.38456C13.795 10.3185 13.4372 11.2064 12.89 11.976L17.707 16.793C17.8892 16.9816 17.99 17.2342 17.9877 17.4964C17.9854 17.7586 17.8802 18.0094 17.6948 18.1948C17.5094 18.3802 17.2586 18.4854 16.9964 18.4877C16.7342 18.49 16.4816 18.3892 16.293 18.207L11.477 13.391C10.5794 14.0293 9.52335 14.4082 8.42468 14.4861C7.326 14.5641 6.22707 14.3381 5.2483 13.833C4.26953 13.3278 3.44869 12.563 2.87572 11.6224C2.30276 10.6817 1.99979 9.60144 2 8.5Z"
          fill="#6B7280"
        />
      </svg>
    );
  };
  
  export const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 19L19 5" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 19L5 5" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  export const RoleIcon = ({ fill }: { fill?: string }) => {
    const strokeColor = fill || "#303030";
    const fillColor = fill || "none";
    const innerFillColor = fill ? "white" : fillColor;
    
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fillColor}>
        <path 
          d="M18.14 21.62C17.26 21.88 16.22 22 15 22H9C7.78 22 6.74 21.88 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62Z" 
          fill={innerFillColor}
          stroke={strokeColor}
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2Z" 
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M15.58 10.58C15.58 12.56 13.98 14.17 12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58Z" 
          fill={innerFillColor}
          stroke={strokeColor}
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    );
  };
  
  
  

  export const DashboardIcons = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 18.5C16.6 18.5 17.5 17.6 17.5 16.5V7.5C17.5 6.4 16.6 5.5 15.5 5.5C14.4 5.5 13.5 6.4 13.5 7.5V16.5C13.5 17.6 14.39 18.5 15.5 18.5Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 18.5C9.6 18.5 10.5 17.6 10.5 16.5V13C10.5 11.9 9.6 11 8.5 11C7.4 11 6.5 11.9 6.5 13V16.5C6.5 17.6 7.39 18.5 8.5 18.5Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const UploadIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M16.44 9.39999C20.04 9.70999 21.51 11.56 21.51 15.61V15.74C21.51 20.21 19.72 22 15.25 22H8.73998C4.26998 22 2.47998 20.21 2.47998 15.74V15.61C2.47998 11.59 3.92998 9.73999 7.46998 9.40999"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5V4.12"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3499 6.35L11.9999 3L8.6499 6.35"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const LocationIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M12 20C16.1421 20 19.5 16.6421 19.5 12.5C19.5 8.35786 16.1421 5 12 5C7.85786 5 4.5 8.35786 4.5 12.5C4.5 16.6421 7.85786 20 12 20Z"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.5V2.5"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12.5H2"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.5V22.5"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12.5H22"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  

  export const CompanyDetailsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.7502 4.63998L6.32022 2.44998C3.93022 1.27998 1.97021 2.46998 1.97021 5.08998V19.93C1.97021 21.07 2.92021 22 4.08021 22H11.5002C12.0502 22 12.5002 21.55 12.5002 21V7.40998C12.5002 6.35998 11.7102 5.10998 10.7502 4.63998ZM8.97021 13.75H5.50021C5.09021 13.75 4.75021 13.41 4.75021 13C4.75021 12.59 5.09021 12.25 5.50021 12.25H8.97021C9.38021 12.25 9.72021 12.59 9.72021 13C9.72021 13.41 9.39021 13.75 8.97021 13.75ZM8.97021 9.74998H5.50021C5.09021 9.74998 4.75021 9.40998 4.75021 8.99998C4.75021 8.58998 5.09021 8.24998 5.50021 8.24998H8.97021C9.38021 8.24998 9.72021 8.58998 9.72021 8.99998C9.72021 9.40998 9.39021 9.74998 8.97021 9.74998Z"
        fill="#3DA229"
      />
      <path
        d="M22 18.04V19.5C22 20.88 20.88 22 19.5 22H14.97C14.43 22 14 21.57 14 21.03V18.87C15.07 19 16.2 18.69 17.01 18.04C17.69 18.59 18.56 18.92 19.51 18.92C20.44 18.92 21.31 18.59 22 18.04Z"
        fill="#3DA229"
      />
      <path
        d="M22 15.05V15.06C21.92 16.37 20.85 17.42 19.51 17.42C18.12 17.42 17.01 16.29 17.01 14.92C17.01 16.45 15.6 17.68 14 17.37V12C14 11.36 14.59 10.88 15.22 11.02L17.01 11.42L17.49 11.53L19.53 11.99C20.02 12.09 20.47 12.26 20.86 12.51C20.86 12.52 20.87 12.52 20.87 12.52C20.97 12.59 21.07 12.67 21.16 12.76C21.62 13.22 21.92 13.89 21.99 14.87C21.99 14.93 22 14.99 22 15.05Z"
        fill="#3DA229"
      />
    </svg>
  );
  
 export const SubscriptionIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0599 19.39C14.4399 19.81 13.6599 20.16 12.7099 20.47L11.1299 20.99C7.15985 22.27 5.06985 21.2 3.77985 17.23L2.49985 13.28C1.21985 9.31001 2.27985 7.21001 6.24985 5.93001L7.82985 5.41001C8.23985 5.28001 8.62985 5.17001 8.99985 5.10001C8.69985 5.71001 8.45985 6.45001 8.25985 7.30001L7.27985 11.49C6.29985 15.67 7.58985 17.73 11.7599 18.72L13.4399 19.12C14.0199 19.26 14.5599 19.35 15.0599 19.39Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6401 8.53L17.4901 9.76"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6602 12.4L14.5602 13.14"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const InvoiceIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.09607 11H8.10505"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8984 11H16.3984"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.09607 7H8.10505"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8984 7H16.3984"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export const DocumentsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0001 13.4H13.8001C11.4001 13.4 10.6001 12.6 10.6001 10.2V7L17.0001 13.4Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6001 2H15.6001"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 5C7 3.34 8.34 2 10 2H12.62"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9999 8V14.19C21.9999 15.74 20.7399 17 19.1899 17"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  export const FilterIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.40039 2.09998H18.6004C19.7004 2.09998 20.6004 2.99998 20.6004 4.09998V6.29998C20.6004 7.09998 20.1004 8.09998 19.6004 8.59998L15.3004 12.4C14.7004 12.9 14.3004 13.9 14.3004 14.7V19C14.3004 19.6 13.9004 20.4 13.4004 20.7L12.0004 21.6C10.7004 22.4 8.90039 21.5 8.90039 19.9V14.6C8.90039 13.9 8.50039 13 8.10039 12.5L4.30039 8.49998C3.80039 7.99998 3.40039 7.09998 3.40039 6.49998V4.19998C3.40039 2.99998 4.30039 2.09998 5.40039 2.09998Z"
        stroke="#757575"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.93 2.09998L6 9.99998"
        stroke="#757575"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  export const AttachSquareIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1999 11.8002L10.7899 13.2102C10.0099 13.9902 10.0099 15.2602 10.7899 16.0402C11.5699 16.8202 12.8399 16.8202 13.6199 16.0402L15.8399 13.8202C17.3999 12.2602 17.3999 9.73023 15.8399 8.16023C14.2799 6.60023 11.7499 6.60023 10.1799 8.16023L7.75988 10.5802C6.41988 11.9202 6.41988 14.0902 7.75988 15.4302"
        stroke="#767676"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="#767676"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SendIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.34018 2.82003L12.0468 5.67336C14.6068 6.95336 14.6068 9.0467 12.0468 10.3267L6.34018 13.18C2.50018 15.1 0.933509 13.5267 2.85351 9.69336L3.43351 8.54003C3.58018 8.2467 3.58018 7.76003 3.43351 7.4667L2.85351 6.3067C0.933509 2.47336 2.50684 0.900029 6.34018 2.82003Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8L7 8"
        stroke="#369623"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EmergexIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="147"
      height="65"
      viewBox="0 0 117 25"
      fill="none"
    >
      <path
        d="M106.929 14.4154L110.381 20.2752H116.847L110.381 10.0411L117 0.5H110.534L106.929 6.31492L104.257 10.0411L106.929 14.4154Z"
        fill="#3DA229"
      />
      <path
        d="M107.597 14.4154L104.751 18.2727H98.4319L104.145 10.0411L98.4143 2.40357H104.88L107.597 6.31493L110.269 10.0411L107.597 14.4154Z"
        fill="white"
      />
      <path
        d="M105.059 7.98644V12.6153H95.4405V7.98644H105.059Z"
        fill="white"
      />
      <path
        d="M91.2941 11.7972C91.2941 12.1432 91.2707 12.4891 91.2238 12.8351H82.5266C82.5735 13.527 82.7689 14.046 83.1127 14.3919C83.4722 14.7228 83.9254 14.8883 84.4724 14.8883C85.2382 14.8883 85.7851 14.5574 86.1133 13.8955H91.0128C90.8096 14.768 90.4111 15.5501 89.8172 16.2421C89.239 16.9189 88.5045 17.4529 87.6137 17.844C86.7228 18.2351 85.7383 18.4306 84.6599 18.4306C83.3627 18.4306 82.2063 18.1674 81.1904 17.6409C80.1902 17.1145 79.401 16.3624 78.8227 15.3847C78.2601 14.407 77.9788 13.2563 77.9788 11.9326C77.9788 10.6089 78.2601 9.46572 78.8227 8.50305C79.3854 7.52533 80.1668 6.77324 81.167 6.24678C82.1828 5.72032 83.3471 5.45709 84.6599 5.45709C85.957 5.45709 87.1057 5.7128 88.1059 6.22422C89.1062 6.73564 89.8876 7.47269 90.4502 8.43536C91.0128 9.38299 91.2941 10.5036 91.2941 11.7972ZM86.6056 10.6916C86.6056 10.1501 86.4181 9.72896 86.043 9.42812C85.6679 9.11224 85.1991 8.9543 84.6365 8.9543C84.0739 8.9543 83.6128 9.10472 83.2534 9.40556C82.8939 9.69135 82.6595 10.12 82.5501 10.6916H86.6056Z"
        fill="white"
      />
      <path
        d="M67.6481 5.45709C68.5389 5.45709 69.3125 5.63007 69.9688 5.97603C70.6409 6.32199 71.1566 6.78828 71.5161 7.37491V5.61502H76.1108V18.1373C76.1108 19.3256 75.8763 20.3936 75.4075 21.3412C74.9386 22.3039 74.2041 23.071 73.2039 23.6426C72.2193 24.2142 70.9691 24.5 69.4531 24.5C67.4214 24.5 65.7961 24.0412 64.5771 23.1237C63.3581 22.2061 62.6626 20.9577 62.4907 19.3783H67.0151C67.1089 19.7844 67.3433 20.1003 67.7184 20.3259C68.0935 20.5515 68.5779 20.6643 69.1718 20.6643C70.7346 20.6643 71.5161 19.822 71.5161 18.1373V16.5128C71.1566 17.0994 70.6409 17.5657 69.9688 17.9117C69.3125 18.2577 68.5389 18.4306 67.6481 18.4306C66.601 18.4306 65.6476 18.1674 64.7881 17.6409C63.9442 17.1145 63.2721 16.3624 62.772 15.3847C62.2876 14.3919 62.0453 13.2412 62.0453 11.9326C62.0453 10.6239 62.2876 9.48077 62.772 8.50305C63.2721 7.52533 63.9442 6.77324 64.7881 6.24678C65.6476 5.72032 66.601 5.45709 67.6481 5.45709ZM71.5161 11.9326C71.5161 11.1203 71.2816 10.481 70.8128 10.0148C70.3596 9.54846 69.7969 9.31531 69.1249 9.31531C68.4373 9.31531 67.8669 9.54846 67.4136 10.0148C66.9604 10.466 66.7338 11.1053 66.7338 11.9326C66.7338 12.7448 66.9604 13.3916 67.4136 13.873C67.8669 14.3393 68.4373 14.5724 69.1249 14.5724C69.7969 14.5724 70.3596 14.3393 70.8128 13.873C71.2816 13.4067 71.5161 12.7599 71.5161 11.9326Z"
        fill="white"
      />
      <path
        d="M56.9052 7.84874C57.4209 7.12673 58.0461 6.55515 58.7806 6.13398C59.5151 5.71281 60.3043 5.50222 61.1483 5.50222V10.2178H59.8589C58.8587 10.2178 58.1164 10.4058 57.6319 10.7819C57.1474 11.1579 56.9052 11.8123 56.9052 12.7448V18.2727H52.3105V5.61503H56.9052V7.84874Z"
        fill="white"
      />
      <path
        d="M50.4302 11.7972C50.4302 12.1432 50.4067 12.4891 50.3598 12.8351H41.6627C41.7096 13.527 41.9049 14.046 42.2487 14.3919C42.6082 14.7228 43.0614 14.8883 43.6084 14.8883C44.3742 14.8883 44.9212 14.5574 45.2494 13.8955H50.1488C49.9457 14.768 49.5472 15.5501 48.9533 16.2421C48.375 16.9189 47.6405 17.4529 46.7497 17.844C45.8589 18.2351 44.8743 18.4306 43.796 18.4306C42.4988 18.4306 41.3423 18.1674 40.3265 17.6409C39.3263 17.1145 38.537 16.3624 37.9588 15.3847C37.3962 14.407 37.1149 13.2563 37.1149 11.9326C37.1149 10.6089 37.3962 9.46572 37.9588 8.50305C38.5214 7.52533 39.3028 6.77324 40.303 6.24678C41.3189 5.72032 42.4832 5.45709 43.796 5.45709C45.0931 5.45709 46.2418 5.7128 47.242 6.22422C48.2422 6.73564 49.0236 7.47269 49.5862 8.43536C50.1488 9.38299 50.4302 10.5036 50.4302 11.7972ZM45.7417 10.6916C45.7417 10.1501 45.5541 9.72896 45.1791 9.42812C44.804 9.11224 44.3351 8.9543 43.7725 8.9543C43.2099 8.9543 42.7489 9.10472 42.3894 9.40556C42.03 9.69135 41.7955 10.12 41.6861 10.6916H45.7417Z"
        fill="white"
      />
      <path
        d="M30.0263 5.50222C31.6829 5.50222 32.98 5.98356 33.9177 6.94623C34.871 7.90891 35.3477 9.22507 35.3477 10.8947V18.2727H30.753V11.4813C30.753 10.8045 30.5576 10.278 30.1669 9.90195C29.7762 9.5259 29.2448 9.33788 28.5728 9.33788C27.9008 9.33788 27.3694 9.5259 26.9787 9.90195C26.588 10.278 26.3927 10.8045 26.3927 11.4813V18.2727H21.798V11.4813C21.798 10.8045 21.6026 10.278 21.2119 9.90195C20.8368 9.5259 20.3133 9.33788 19.6413 9.33788C18.9536 9.33788 18.4144 9.5259 18.0237 9.90195C17.633 10.278 17.4377 10.8045 17.4377 11.4813V18.2727H12.843V5.61503H17.4377V7.28467C17.844 6.74317 18.3676 6.31448 19.0083 5.9986C19.6647 5.66768 20.4149 5.50222 21.2588 5.50222C22.2277 5.50222 23.0873 5.70528 23.8375 6.11141C24.6032 6.51754 25.2049 7.08913 25.6425 7.82618C26.1114 7.13426 26.7287 6.57771 27.4945 6.15654C28.2603 5.72033 29.1042 5.50222 30.0263 5.50222Z"
        fill="white"
      />
      <path
        d="M4.59471 5.90835V8.50306H9.86926L8.67093 11.8649H4.59471V14.7304H10.5725V18.2727H0V2.36601H10.5725V5.90835H4.59471Z"
        fill="white"
      />
    </svg>
  )
}