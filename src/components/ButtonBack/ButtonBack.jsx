import { useNavigate } from 'react-router-dom';

// КОМПОНЕНТ КНОПКИ "ВЕРНУТЬСЯ"(назад)
export default function ButtonBack() {
  const navigate = useNavigate();

  return (
    <div
      className="back-btn-container"
    >
      <button
        className="back-btn_btn"
        onClick={() => navigate(-1)}
      >
        Вернуться
      </button>
    </div>
  );
}
