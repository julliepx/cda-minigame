import { HTMLProps } from "react";

const Tooltip = ({ ...props }: HTMLProps<SVGSVGElement>) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.64551 16.1591C10.7672 16.1591 12.8021 15.3162 14.3024 13.8159C15.8027 12.3157 16.6455 10.2808 16.6455 8.15909C16.6455 6.03736 15.8027 4.00252 14.3024 2.50223C12.8021 1.00194 10.7672 0.159088 8.64551 0.159088C6.52378 0.159088 4.48894 1.00194 2.98865 2.50223C1.48836 4.00252 0.645508 6.03736 0.645508 8.15909C0.645508 10.2808 1.48836 12.3157 2.98865 13.8159C4.48894 15.3162 6.52378 16.1591 8.64551 16.1591ZM5.95176 5.32471C6.19863 4.62784 6.86113 4.15909 7.60176 4.15909H9.42363C10.5143 4.15909 11.3955 5.04346 11.3955 6.13096C11.3955 6.83721 11.0174 7.49034 10.4049 7.84346L9.39551 8.42159C9.38926 8.82784 9.05488 9.15909 8.64551 9.15909C8.22988 9.15909 7.89551 8.82471 7.89551 8.40909V7.98721C7.89551 7.71846 8.03926 7.47159 8.27363 7.33721L9.65801 6.54346C9.80488 6.45909 9.89551 6.30284 9.89551 6.13409C9.89551 5.87159 9.68301 5.66221 9.42363 5.66221H7.60176C7.49551 5.66221 7.40176 5.72784 7.36738 5.82784L7.35488 5.86534C7.21738 6.25596 6.78613 6.45909 6.39863 6.32159C6.01113 6.18409 5.80488 5.75284 5.94238 5.36534L5.95488 5.32784L5.95176 5.32471ZM7.64551 11.1591C7.64551 10.8939 7.75086 10.6395 7.9384 10.452C8.12594 10.2644 8.38029 10.1591 8.64551 10.1591C8.91072 10.1591 9.16508 10.2644 9.35261 10.452C9.54015 10.6395 9.64551 10.8939 9.64551 11.1591C9.64551 11.4243 9.54015 11.6787 9.35261 11.8662C9.16508 12.0537 8.91072 12.1591 8.64551 12.1591C8.38029 12.1591 8.12594 12.0537 7.9384 11.8662C7.75086 11.6787 7.64551 11.4243 7.64551 11.1591Z"
        fill="var(--primary)"
      />
    </svg>
  );
};

export default Tooltip;