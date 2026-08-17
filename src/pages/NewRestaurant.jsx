import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/UI/Header';
import '../styles/NewRestaurant.css';

export default function NewRestaurant() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate();

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }

  async function submitHandler(event) {
    event.preventDefault();
    const body = event.target;

    const formData = new FormData();

    formData.append('title', body.title.value);
    formData.append('address', body.address.value);
    formData.append('tel', body.tel.value);
    formData.append('description', body.description.value);
    formData.append('businessHour', body.businessHour.value);
    formData.append('userid', Math.floor(Math.random() + 1));

    formData.append('image', selectedFile);

    // const data = JSON.stringify({
    //     title: body.title.value,
    //     address: body.address.value,
    //     tel: body.tel.value,
    //     description: body.description.value,
    //     businessHour: body.businessHour.value,
    //     userid: Math.floor(Math.random()),
    //   });
    console.log(Object.fromEntries(formData.entries()))
    const response = await fetch('http://localhost:3000/new-restaurant', {
      method: 'POST',
      body: formData
    });

    await response.json();
  }

  return (
    <>
      <Header />
      <form className="report-page" onSubmit={submitHandler}>
        <div className="report-container">
          <h2 className="report-title">제보하기</h2>

          <div className="form-group">
            <label htmlFor="title">가게명</label>

            <input
              type="text"
              id="title"
              name="title"
              placeholder="가게명을 작성해주세요..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">주소</label>

            <input
              type="text"
              id="address"
              name="address"
              placeholder="가게 주소를 작성해주세요..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tel">전화번호</label>

            <input
              type="text"
              id="tel"
              name="tel"
              placeholder="가게 연락처를 작성해주세요..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessHour">영업 시간</label>

            <input
              type="text"
              id="businessHour"
              name="businessHour"
              placeholder="영업 시간을 작성해주세요..."
              required
            />
          </div>

          <div className="form-group">
            <label>이미지</label>

            {!previewUrl && <><label htmlFor="image" className="upload-box">
              +
            </label>

            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              hidden
            />
            </>}
            {previewUrl && <>
              <img 
                src={previewUrl} 
                alt="업로드 이미지 미리보기" 
                className="upload-img-preview" 
              />
            </>}
          </div>

          <div className="form-group">
            <label htmlFor="description">설명</label>

            <textarea
              className="description"
              name="description"
              id="description"
              placeholder='가게에 대한 설명을 작성해주세요...'
            ></textarea>
          </div>

          <div className="button-group">
            <button type="submit" className="next-btn">
              작성
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              취소
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
