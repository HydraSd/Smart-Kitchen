import '../components/Slider';
import ImageSlider from '../components/Slider';
import Cards from '../components/Cards'
import Content1 from '../components/Content1';

function Home() {
  return (
    <>  
    <div style={{marginTop: 0}}>
      <ImageSlider/>
    </div>
    <div style={{marginTop:10}}>
    <Cards/>
    </div>
    <Content1 />
    </>
  );
}

export default Home;