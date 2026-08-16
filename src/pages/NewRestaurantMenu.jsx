import '../styles/NewRestaurantMenu.css';

export default function NewRestaurantMenu() {
  return (
    <section className="menu-card">
      <div className="menu-row">
        <div className="input-box">
          <label>메뉴</label>
          <input type="text" placeholder="메뉴명을 입력하세요." />
        </div>

        <div className="price-box">
          <label>가격</label>
          <input type="text" placeholder="8,000" />
        </div>
      </div>

      <button className="add-row-btn">+ 칸 추가하기</button>
    </section>
  );
}
