import './HelpfulHints.styles.css';
import dreamVacay from '../../assets/dreamVacay.jpeg';

export default function HelpfulHints(){
    return (
        <div id='helpful-hints'>
            <img id="pic" src={dreamVacay} alt='Dream vacation' />
        </div>
    );
}