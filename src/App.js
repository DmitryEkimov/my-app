import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import bg3 from './assets/bg3.jpg';
import bg2 from './assets/bg2.jpg';

const App = ()=> {
    const title= 'This is Pockemon Card Game';
    const descr= 'Simple Triple Triad Card';
    const colorBg= '#000000';
    return (
    <>
        <Header title={title} descr={descr}/>
        <Layout urlBg={bg3} />
        <Layout colorBg={colorBg}/>
        <Layout urlBg={bg2} />
        <Footer />
    </>
    );
  };

  export default App;
