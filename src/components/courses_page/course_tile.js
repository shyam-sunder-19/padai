const CourseTile = (props) => {
    const squareSize = 200
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
                    {props.course_data.name}
                </h2>
                <h3 className="flex">offered by<div className="font-semibold pl-1">{props.course_data.university_name}</div></h3>
                <hr></hr>
                <div className="flex w-full justify-between">
                    <div>
                        <p>Fee: {props.course_data.fee}</p>
                        <p>Course Type: {props.course_data.type[0]}</p>
                        <p>Specialization: {props.course_data.specialization}</p>
                        <p>Approved By: {props.course_data.approving_bodies[0]}</p>
                        <p>Term: {props.course_data.term_in_years} year(s)</p>
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

export default CourseTile