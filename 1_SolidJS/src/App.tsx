import { Header } from './components';
import { AppRouter } from './routes';

export const App = () => {
  return (
    <AppRouter>
      <Header />
    </AppRouter>
  );
};