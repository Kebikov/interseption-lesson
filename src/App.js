import './App.scss';
import { useEffect } from 'react';
import helpPassAllImg from './service/helpPassAllImg';
import box from './resource/spiner/box.jpg';

const allJpg = helpPassAllImg(require.context('./resource/all-weddings/DA/jpg/', false, /\.(png|jpe?g|svg|webp)$/), 'jpg');
const allWebP = helpPassAllImg(require.context('./resource/all-weddings/DA/webP/', false, /\.(png|jpe?g|svg|webp)$/), 'webp');
const allImg = [];

for(let i = 0; i < allJpg.length; i++) {
    let arr = [];
    arr.push(allJpg[i]);
    arr.push(allWebP[i]);
    allImg.push(arr);
}

const App = () => {
    useEffect(() => {
        const imgObserver = new IntersectionObserver(entryCall, {rootMargin: '0px 0px 800px 0px'});
        const pictureAll = document.querySelectorAll('picture');
        pictureAll.forEach(item => imgObserver.observe(item));
    },[]);

    const entryCall = (entryAll, observer) => {
        entryAll.forEach(item => {
            if(item.isIntersecting) {
                const img =  item.target.querySelector('img');
                const source = item.target.querySelector('source');
                img.src = img.dataset.src;
                source.srcset = source.dataset.src;
                img.onload = () => {
                    item.target.className = 'loading-img';
                    img.removeAttribute('height');
                }
                observer.unobserve(item.target);
            }
        })
    }

    const items = allImg.map(item => {
        return(
            <picture key={item} className='anime'>
                <source type="image/webp" key={item[1]} data-src={item[1]}/>
                <img src={box} alt={'img'} key={item} data-src={item[0]} height={'600px'}/>
            </picture>
            
        )
    });

    

    return(
            <div className="wrapper">
                {items}
            </div>
    )
}

export default App;


