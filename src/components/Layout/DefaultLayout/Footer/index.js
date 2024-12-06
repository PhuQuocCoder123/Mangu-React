import classNames from "classnames/bind";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <h4>Về chúng tôi</h4>
      <p>
        Chào mừng bạn đến với trang web truyện tranh của chúng tôi, nơi mang đến
        cho bạn trải nghiệm đọc truyện tuyệt vời nhất! Với giao diện dễ sử dụng,
        chúng tôi cam kết bạn sẽ tìm thấy và thưởng thức những bộ truyện tranh
        yêu thích một cách nhanh chóng và thuận tiện. Không quảng cáo phiền
        phức, bạn sẽ đắm chìm vào thế giới truyện tranh một cách trọn vẹn và
        không bị gián đoạn. Hãy khám phá ngay kho truyện phong phú và đa dạng
        của chúng tôi, và tận hưởng những phút giây giải trí thật thoải mái!
      </p>

      <ul className={cx("socials")}>
        <li>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </li>
        <li>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </li>
        <li>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
      <span>copyright © 2024</span>
    </div>
  );
}

export default Footer;
