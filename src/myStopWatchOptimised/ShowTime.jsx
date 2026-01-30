function ShowTime({time}) {

    let min = Math.floor(time/60);
    let sec = time % 60;
    return(
        <h2>
        {
            String(min).padStart(2, "0")
        }:
        {
            String(sec).padStart(2, '0')
        }
        
        </h2>
    )
}

export default ShowTime