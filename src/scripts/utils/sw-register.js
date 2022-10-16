import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker tidak support di broswer ini');
    return;
  }

  const wb = new WorkboxWindow.Workbox('/sw.bundle.js');
  try {
    await wb.register();
    console.log('Service worker berhasil registrasi');
  } catch (error) {
    console.log('Gagal registrasi service worker', error);
  }
};

export default swRegister;
