import './App.scss';
import helpPassAllImg from './service/helpPassAllImg';

const arrAllImg = helpPassAllImg(require.context('./resource/img/', false, /\.(png|jpe?g|svg)$/));
// https://www.npmjs.com/package/react-intersection-observer
const App = () => {

    const items = arrAllImg.map(item => {
        return(
            <img src={item} alt={'img'} key={item}/>
        )
    })

    return(
            <div className="wrapper">
                {items}
            </div>
    )
}

export default App;


