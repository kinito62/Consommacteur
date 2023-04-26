const AreaPlace = ({
    areas
})=> {
    return(
        <div className='listAreas'>
            {areas.map((area, i) => {
                return (
                <div key={i} className="container">
				<h1 className="titleForm">{area.name}</h1>
				</div>
                )
            })
               
            }
            </div>
    )

}
export default AreaPlace;