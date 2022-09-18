function DetailCard({title, timeframe, icon}) {
    return (
        <div className='dashboard__detail__card'>
            <h1 className='detail__title'>{title}</h1>
            <link rel="icon" type="image/svg+xml" href="./icon-elipsis.svg" />
        </div>
    )
        
    
}

export default DetailCard