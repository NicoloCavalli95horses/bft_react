//===============
// Import
//===============
import './Homepage.css';


//===============
// Function
//===============
function Homepage( {item} ) {
  return (
    <div className='img-wrapper' onClick={() => onClick(item.is_premium)}>
      <img src={item.src} alt={item.alt || 'image'} />
      {item.is_premium && <div className="badge">🔒</div>}
    </div>
  );
}

function onClick(premium) {
  alert(premium ? 'premium content' : 'free content');
}

export default Homepage