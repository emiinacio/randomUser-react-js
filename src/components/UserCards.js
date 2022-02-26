import './userCards.css';
import Location from './Location';

const UserCards = ({ userData }) => {
    return (
        <div className='card' >
            <div className='card__picture'>
                <div className='card__image'><img src={userData.picture.large} alt="Image person" /></div>
            </div>
            <div className='card__body'>
                <div className='card__title'>{userData.name.first} {userData.name.last}</div>
                <p className='card__username'>({userData.login.username})</p>
                <Location location={userData.location}/>
            </div>
        </div>
    )
}

export default UserCards;