const UniversityTile = (props) => {
    const squareSize = 170
    return(
        <div className="flex w-full m-2 p-2 border rounded border-blue-500 ">
            <div 
                className="bg-blue-500 mx-2"
                style={{
                width: `${squareSize}px`,
                height: `${squareSize}px`,
                }}
            >
            </div>
            <div className="flex flex-col w-full">
                <h2 className="font-bold text-xl">
                    {props.university_data.name}
                </h2>
                <hr></hr>
                <div className="flex w-full justify-between">
                    <div>
                        <p>Fee: {props.university_data.fee}</p>
                        <div className="flex">Approved By: {props.university_data.approving_bodies.map(
                            body => <div className="mx-1">{body}</div>
                        )}</div>
                        <p>Term: {props.university_data.term_in_years} year(s)</p>
                    </div>
                    <div className="flex flex-col p-2">
                        <button className="px-4 py-2 mb-1 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                            Enquire Now
                        </button>
                        <button className="px-4 py-2 mb-1 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                            Download Brochure
                        </button>
                        <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                            Add to Compare
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default UniversityTile