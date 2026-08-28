import Router from './routes/Router';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
