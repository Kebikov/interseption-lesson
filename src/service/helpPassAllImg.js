
const helpPassAllImg = (context, format) => {
    
    function importAll(context) {
        let images = {};
        context.keys().forEach((item) => { images[item.replace('./', '')] = context(item); });
        return images
    }
    const images = importAll(context);

    function allImg () {
        const arrImg = [];
        let lengthArr = Object.keys(images).length;
        for(let i = 1; i <= lengthArr; i++) {
            arrImg.push(images[`${i}.${format}`].default)
        }
        return arrImg;
    }

    return allImg();
}
export default helpPassAllImg;




