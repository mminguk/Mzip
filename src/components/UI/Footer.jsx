import "../../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <h2 className="footer-logo">
            Mzip
          </h2>

          <p className="footer-description">
            맛있는 식당을 쉽게 찾고 공유하는 서비스
          </p>

        </div>

        <div className="footer-info">

          <p>📍 충청남도 천안시</p>
          <p>☎ 041-123-4567</p>
          <p>✉ contact@mzip.com</p>

        </div>

        <nav className="footer-menu">

          <Link to="/">홈</Link>

          <Link to="/report">
            제보하기
          </Link>

          <Link to="/company">
            회사소개
          </Link>

        </nav>

        <div className="footer-bottom">
          © 2026 Mzip. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;