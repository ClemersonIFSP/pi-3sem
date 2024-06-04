import { create } from 'zustand';
import { persist, createLocalStorage } from 'zustand/middleware';

// Supondo que você tenha um router personalizado para React DOM
import { useHistory } from 'react-router-dom';

const storeAuth = create(
  persist(
    (set, get) => ({
      token: null,

      async login(token) {
        set(() => ({ token: token }));
        // Use o hook useHistory para navegação no React DOM
        const history = useHistory();
        history.push('/dashboard');
      },

      logout() {
        set(() => ({ token: null }));
        // Também pode ser usado o useHistory aqui, se necessário
      },
    }),
    {
      name: 'authPaia',
      // Utilize o createLocalStorage para React DOM
      storage: createLocalStorage(),
    }
  )
);

export { storeAuth };