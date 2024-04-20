import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = props => {
    return (
        <form>
            <OptionSize 
                sizes={props.sizes} 
                setCurrentSize={props.setCurrentSize} 
                setCurrentPrice={props.setCurrentPrice}
                currentSize={props.currentSize}
            ></OptionSize>
            <OptionColor
                colors={props.colors}
                setCurrentColor={props.setCurrentColor}
                currentColor={props.currentColor}
            ></OptionColor>
            <Button onClick={props.onClick} className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
};

ProductForm.propTypes = {
    sizes: PropTypes.array.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentPrice: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    
}
export default ProductForm;