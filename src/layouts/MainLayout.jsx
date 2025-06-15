import Footer from '../components/Footer';
import Header from '../components/Header';
import bg from '../assets/bg.png';


export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage:`url(${bg})`}} >
      <Header />

      <main className="flex-grow p-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}
