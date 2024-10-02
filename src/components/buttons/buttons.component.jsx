
import './buttons.styles.css';
const Buttons = ({ setAnimationIndex }) => {

    return (
        <div className="button-group">
            <button className='button' onClick={() => setAnimationIndex(0)}>Dance 1</button>
            <button className='button' onClick={() => setAnimationIndex(3)}>Dance 2</button>
        </div>
    );
};

export default Buttons;
