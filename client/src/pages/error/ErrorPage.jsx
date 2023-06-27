import img from '../../assets/not-found.svg';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className='error-page'>
      <img src={img} alt='404 not found' />
      <p>Trang bạn tìm kiếm không có trong hệ thống</p>
      <Button variant='outlined' onClick={() => navigate('/')}>
        quay về trang chủ
      </Button>
    </section>
  );
};
export default ErrorPage;
