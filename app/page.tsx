
import Banner from './Banner';
import About from './Components/About/About';
import Client from './Components/Clients/Client';
import More from './Components/More/More';
import Dreams from './Components/Dreams/Dreams';
import Footer from './Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <section>
      <Banner/>
        <About />
<Client />
<More />
<Dreams />
<Footer />
     </section>

     
     
</div>

  );
};

export default Home;
