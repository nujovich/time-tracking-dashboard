import './App.css'

function App() {

  return (
    <div className="dashboard__container">
      <div className='profile__container'>
        <div className='profile__absolute__container'>
          <img src="./image-jeremy.png" alt='jeremy' className='profile__image'></img>
          <p className='title'>Report for</p><span className='name'>Jeremy Robson</span>
        </div>
        <a className='timeframe'>Daily</a>
        <a className='timeframe'>Weekly</a>
        <a className='timeframe'>Monthly</a>
      </div>
      <div className='dashboard__detail__card'>
        <div className='card__title__container'>
          <h1 className='detail__title'>Work</h1>
          <img className='card__icon' src='./icon-ellipsis.svg'></img>
        </div>
        <div className='timeframe__detail'>
          <h2 className='timeframe__value'>32 hrs</h2>
          <p className='last__timeframe__value'>Last week - 36 hrs</p>
        </div>
      </div>
      <div className='dashboard__detail__card'>
        <div className='card__title__container'>
          <h1 className='detail__title'>Play</h1>
          <img className='card__icon' src='./icon-ellipsis.svg'></img>
        </div>
        <div className='timeframe__detail'>
          <h2 className='timeframe__value'>32 hrs</h2>
          <p className='last__timeframe__value'>Last week - 36 hrs</p>
        </div>
      </div>
      <div className='dashboard__detail__card'>
        <div className='card__title__container'>
          <h1 className='detail__title'>Study</h1>
          <img className='card__icon' src='./icon-ellipsis.svg'></img>
        </div>
        <div className='timeframe__detail'>
          <h2 className='timeframe__value'>32 hrs</h2>
          <p className='last__timeframe__value'>Last week - 36 hrs</p>
        </div>
      </div>
      <div className='dashboard__detail__card'>
        <div className='card__title__container'>
          <h1 className='detail__title'>Exercise</h1>
          <img className='card__icon' src='./icon-ellipsis.svg'></img>
        </div>
        <div className='timeframe__detail'>
          <h2 className='timeframe__value'>32 hrs</h2>
          <p className='last__timeframe__value'>Last week - 36 hrs</p>
        </div>
      </div>
      <div className='dashboard__detail__card'>
        <div className='card__title__container'>
          <h1 className='detail__title'>Social</h1>
          <img className='card__icon' src='./icon-ellipsis.svg'></img>
        </div>
        <div className='timeframe__detail'>
          <h2 className='timeframe__value'>32 hrs</h2>
          <p className='last__timeframe__value'>Last week - 36 hrs</p>
        </div>
      </div>
      <div className='dashboard__detail__card'>
        <div className='card__title__container'>
          <h1 className='detail__title'>Self Care</h1>
          <img className='card__icon' src='./icon-ellipsis.svg'></img>
        </div>
        <div className='timeframe__detail'>
          <h2 className='timeframe__value'>32 hrs</h2>
          <p className='last__timeframe__value'>Last week - 36 hrs</p>
        </div>
      </div>
    </div>
  )
}

export default App
