import Link from 'next/link'

const UniversityTile = (props) => {
    const squareSize = 170
    let university_link = "/university/"
    university_link += props.university_data.id
    return(
        <div className="flex w-full m-4 p-4 border rounded hover:bg-blue-50">
            <img 
                src={props.university_data.picture[0]}
                style={{
                    width: `${squareSize}px`,
                    height: `${squareSize}px`,
                    marginRight: `5px`
                }}
            ></img>
            
            <div className="flex flex-col w-full">
                <Link href={university_link}>
                    <h2 className="font-bold text-2xl">
                        {props.university_data.name}
                    </h2>
                </Link>
                <hr></hr>
                <div className="flex w-full justify-between">
                    <div>
                        <div className="flex">Approved By: {props.university_data.approving_bodies.map(
                            body => <div className="mx-1">{body}</div>
                        )}</div>
                        <p>Term: {props.university_data.term_in_years} year(s)</p>
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

export default UniversityTile