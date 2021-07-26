import imageInSrc from './page-3.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
         <div style={{border:'solid 1px black',maxWidth:"100vw"}}>

<h1 className="title red">Your name here</h1>

<br />

<img src={imageInSrc} alt='no'/>

<br />

<img src="/page-2.jpeg" alt='no' />

</div>

<video width="320" height="240" controls>

<source src="videocode.mp4" type="video/mp4"/ >

</video>
    </div>
  );
}

export default App;
