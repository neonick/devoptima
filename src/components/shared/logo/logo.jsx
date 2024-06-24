import PropTypes from 'prop-types';
import React from 'react';

const Logo = ({ color }) => (
  <a href="/" className="inline-block">
    <span className="sr-only">DevOptima</span>
    <div className="relative w-44 h-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="40"
        fill="none"
        className="absolute top-0 left-0"
      >
        <path
          d="M34.726 9.333c0 2.56-2.052 4.647-4.568 4.647-2.517 0-4.569-2.087-4.569-4.647s2.052-4.648 4.569-4.648c2.516 0 4.568 2.088 4.568 4.648ZM10.724 23.945a3.886 3.886 0 0 0 1.2-.906 4.846 4.846 0 0 0 1.355-3.072c.038-.552-.078-1.024-.116-1.576a5.073 5.073 0 0 1 .193-1.693c.658-2.284 2.942-3.702 5.226-3.309 2.168.355 4.375-.866 5.15-2.953.735-1.93.115-4.215-1.51-5.475-1.588-1.26-3.872-1.26-5.537-.079a4.955 4.955 0 0 0-1.819 2.757 4.763 4.763 0 0 0-.077 1.654c.077.512.116 1.025.077 1.576-.271 2.363-2.284 4.175-4.607 4.214-.503 0-1.006-.118-1.548-.158-.542 0-1.084.08-1.626.276-1.046.355-1.936 1.142-2.478 2.088-1.007 1.772-.736 4.096.658 5.592a4.568 4.568 0 0 0 5.459 1.064Zm6.93-8.114c-.427.237-.852.512-1.2.867a4.618 4.618 0 0 0-1.317 3.032c-.039.512.077 1.024.116 1.536a4.844 4.844 0 0 1-.194 1.655c-.658 2.205-2.903 3.623-5.11 3.23a4.561 4.561 0 0 0-5.032 2.914c-.736 1.89-.116 4.096 1.51 5.356a4.526 4.526 0 0 0 5.42.079c.89-.67 1.548-1.615 1.78-2.718a4.541 4.541 0 0 0 .078-1.615c-.078-.512-.117-1.024-.078-1.536.232-2.323 2.207-4.096 4.49-4.096.504 0 1.007.119 1.51.158a4.35 4.35 0 0 0 1.588-.276 4.642 4.642 0 0 0 2.439-2.048c1.006-1.733.735-4.017-.62-5.514-1.393-1.496-3.6-1.93-5.38-1.024Z"
          fill={color}
        />
      </svg>
      <span
        className="text-[29px] leading-[33px] font-sans text-[{color}] absolute top-[14px] left-[29px]"
        style={{ color: `${color}` }}
      >
        DevOptima
      </span>
    </div>
  </a>
);

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
