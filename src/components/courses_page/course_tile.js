import Link from 'next/link'

const CourseTile = (props) => {
    const squareSize = 200
    let course_link = "/course/"
    course_link += props.course_data.id
    return(
        <div className="flex w-full m-4 p-4 border rounded hover:bg-blue-50">
            <img
                className="bg-blue-500 mx-4"
                style={{
                width: `${squareSize}px`,
                height: `${squareSize}px`,
                }}
                src={props.course_data.course_picture}
            >
            </img>
            <div className="flex flex-col w-full">
                <Link href={course_link}>
                    <h2 className="font-bold text-2xl">
                        {props.course_data.course_name}
                    </h2>
                </Link>
                <h3 className="flex">offered by<div className="font-semibold pl-2">{props.course_data.university_name}</div></h3>
                <hr></hr>
                <div className="flex w-full justify-between">
                    <div>
                        <p>Fee: {props.course_data.fee}</p>
                        <p>Specialization: {props.course_data.specialization}</p>
                        <p>Term: {props.course_data.term_in_years} year(s)</p>
                    </div>
                    <div className="flex flex-col p-4">
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