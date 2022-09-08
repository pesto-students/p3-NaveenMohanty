import { memo } from "react";

export default memo(function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center p-3 border-bottom text-bg-info">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <svg className="bi me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Simple Shortner</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#cc" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#ff" className="nav-link">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#vv" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#ff" className="nav-link">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#d" className="nav-link">
            About
          </a>
        </li>
      </ul>
    </header>
  );
})
