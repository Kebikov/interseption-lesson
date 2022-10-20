import './App.scss';
import helpPassAllImg from './service/helpPassAllImg';
import { useRef, useEffect } from 'react';
import spiner from './resource/spiner/giphy.gif';
import ClipLoader from "react-spinners/ClipLoader";

const arrAllImg = helpPassAllImg(require.context('./resource/img/', false, /\.(png|jpe?g|svg)$/));

const App = () => {
    //const  [loading, setLoading] = useState(true);

    const options = [];

    const entryCall = (entryAll, observer) => {
        entryAll.forEach(item => {
            if(item.isIntersecting) {
                observer.unobserve(item.target);
                return item.target;
            }
        })
    }

    useEffect(() => {
        const imgObserver = new IntersectionObserver(entryCall, options);
        const imgAll = document.querySelectorAll('img');
        imgAll.forEach(item => imgObserver.observe(item));
    },[])

    const items = arrAllImg.map(item => {
        return(
            <img src={item} alt={'img'} key={item} style={display: }/>
        )
    });

    

    return(
            <div className="wrapper">
                {items}
            </div>
    )
}

export default App;


