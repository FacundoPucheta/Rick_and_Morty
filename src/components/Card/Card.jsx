import { Link } from 'react-router-dom';
// import { ADD_FAV, REMOVE_FAV } from '../../redux/actions-types';
import { connect } from 'react-redux';
import { useState } from 'react';
import { addFav, removeFav } from '../../redux/actions';


const Card = (props) => {

  const {id, name, status, species, gender, origin, onClose, image, addFav, removeFav} = props;
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav(props)
      }
   }

   return (
      <div>
         {
        isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => onClose(id)}>X</button>
         
         <Link to={`/detail/${id}`} >
         <h2>{name}</h2>
         </Link>

         <h2>{status}</h2>
         <h2>{gender}</h2>
         <h2>{species}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav())},
      removeFav: (id) => {dispatch(removeFav())}
      
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);