
import './button.css'

export default function Button({text, color}) {
 return (
   <div>
        <button color={color}>
            {text}
        </button>
   </div>
 );
}