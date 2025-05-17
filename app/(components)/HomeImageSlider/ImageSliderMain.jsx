'use client'
import ImageSlider from './ImageSlider'
import { ImageSliderData } from '../../../lib/fetchData';
const ImageSliderMain = () => {
    const images = ImageSliderData;
    return (<>
        <ImageSlider Images={images}/>
    </>);
}
export default ImageSliderMain
