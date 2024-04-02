import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, Modal, OrderInfo } from '@components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <AppHeader />
      <>
        <Routes>
          // Базовые
          <Route path='/' element={<ConstructorPage />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/login' element={<Login />} /> // Защищённый
          <Route path='/register' element={<Register />} /> // Защищённый
          <Route path='/forgot-password' element={<ForgotPassword />} /> //
          Защищённый
          <Route path='/reset-password' element={<ResetPassword />} /> //
          Защищённый
          <Route path='/profile' element={<Profile />} /> // Защищённый
          <Route path='/profile/orders' element={<ProfileOrders />} /> //
          Защищённый
          <Route path='*' element={<NotFound404 />} />
          // Модалки // TODO: убрать заглушку
          <Route
            path='/feed/:number'
            element={<Modal title='' onClose={() => {}} />}
          />
          // TODO: убрать заглушку
          <Route
            path='/ingredients/:id'
            element={<Modal title='' onClose={() => {}} />}
          />
          // TODO: убрать заглушку
          <Route
            path='/ingredients/:id'
            element={<Modal title='' onClose={() => {}} />}
          />
        </Routes>
      </>
    </div>
  </BrowserRouter>
);

export default App;
