import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import styles from "./Card.module.css";

const Card = ({id, name, species, gender, onClose, image, addFav, removeFav, myFavorites}) => {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } 
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const checkLocation = useLocation().pathname;

   return (
      <div className={styles.card}>
         
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         {checkLocation !== '/favorites' && <button onClick={() => onClose(id)}>X</button>}
         
         <Link  to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
         <h2>{gender}</h2>
         <h2>{species}</h2>
         <div className={styles.imgCont}>
         <img src={image} alt={name} />
         </div>

      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);